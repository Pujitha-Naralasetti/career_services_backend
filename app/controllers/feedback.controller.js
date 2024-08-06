const { Op } = require("sequelize");
const db = require("../models");
const Resumes = db.resumes;
const Feedback = db.feedback;

const { CohereClient } = require("cohere-ai");

const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY,
});

exports.askAI = async (req, res) => {
  const { userId, resumeId, jobTitle } = req.body;

  try {
    const resumeData = await Resumes.findByPk(resumeId);
    console.log(resumeData);
    const parsedResumeData = {
      experience: JSON.parse(resumeData?.experience),
      education: JSON.parse(resumeData?.education),
      skills: JSON.parse(resumeData.skills),
    };
    const commentPrompt = generateCommentsPrompt(parsedResumeData, jobTitle);
    const scorePrompt = generateScorePrompt(parsedResumeData, jobTitle);
    const commentChat = await cohere.chat({
      model: "c4ai-aya-23",
      message: commentPrompt,
      task: "storytelling",
      temperature: 0.8,
    });
    const scoreChat = await cohere.chat({
      model: "c4ai-aya-23",
      message: scorePrompt,
      task: "storytelling",
      temperature: 0.8,
    });
    res.status(200).send({
      data: { comments: commentChat?.text, matchingScore: scoreChat?.text },
      message: "Resume feedback by AI successfull",
      status: "Success",
    });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Error generating resume feedback",
      status: "Error",
    });
  }
};

function generateCommentsPrompt(data, jobTitle) {
  let prompt = `Evaluate the fit between the following candidate profile and the job title "${jobTitle}":\n\n**Candidate Profile:**\n\n* **Experience:**\n`;

  data.experience.forEach((exp) => {
    prompt += `  * ${exp.company}: ${exp.designation} - ${exp.startDate} to ${exp.endDate}\n`;
    exp.experiencePoints.forEach((point) => {
      prompt += `    * ${point}\n`;
    });
  });

  prompt += `\n* **Education:**\n`;
  data?.education?.forEach((edu) => {
    prompt += `  * ${edu.institutionName} - ${edu.degree} - ${edu.course}\n`;
  });

  prompt += `\n* **Skills:**\n  * ${data?.skills?.hardSkills.join(
    ", "
  )}\n\n**Job Title:** ${jobTitle}\n\nAssess the candidate's qualifications based on the provided experience, education, and skills. Provide a comprehensive evaluation in 2-3 sentences, highlighting key strengths and potential weaknesses for the given job title.`;

  return prompt;
}

function generateScorePrompt(data, jobTitle) {
  let prompt = `Evaluate the fit between the following candidate profile and the job title "${jobTitle}":\n\n**Candidate Profile:**\n\n* **Experience:**\n`;

  data.experience.forEach((exp) => {
    prompt += `  * ${exp.company}: ${exp.designation} - ${exp.startDate} to ${exp.endDate}\n`;
    exp.experiencePoints.forEach((point) => {
      prompt += `    * ${point}\n`;
    });
  });

  prompt += `\n* **Education:**\n`;
  data?.education?.forEach((edu) => {
    prompt += `  * ${edu.institutionName} - ${edu.degree} - ${edu.course}\n`;
  });

  prompt += `\n* **Skills:**\n  * ${data?.skills?.hardSkills.join(
    ", "
  )}\n\n**Job Title:** ${jobTitle}\n\nAssess the candidate's qualifications based on the provided experience, education, and skills. Provide a score out of 100 what percent the profile matches for the given job title. Give me just score percentage.`;

  return prompt;
}

exports.updateFeedback = async (req, res) => {
  const { resumeId, feedback } = req.body;

  try {
    // const resumeData = await Resumes.findByPk(resumeId);

    if (feedback?.length) {
      const { userId } = await db.resumes.findByPk(resumeId, {
        attributes: ["userId"],
      });
      let feedbackIds
      await Feedback.findAll({
        where: {
          resumeId: resumeId,
        },
        attributes: ["id"],
      }).then((data) => {
        feedbackIds = data?.map(feedback => feedback.id)
      });
      console.log('feedbackIds', feedbackIds)
      const presentResumeIds = [];
      for (let i = 0; i < feedback.length; i++) {
        const element = feedback[i];
        const updateBody = {
          comments: element.comments,
          reply: element.reply,
          resumeId,
          staffId: element.staffId,
        };
        if (element?.id) {
          presentResumeIds.push(element?.id);
          await Feedback.update(updateBody, {
            where: {
              id: element?.id,
            },
          });
        } else {
          await Feedback.create(updateBody);
        }
      }
      const resumeIdsToBeDeleted = feedbackIds.filter(
        (item) => !presentResumeIds.includes(item)
      );
      console.log('resumeIdsToBeDeleted', resumeIdsToBeDeleted)
      await Feedback.destroy({
        where: {
          id: {
            [Op.in]: resumeIdsToBeDeleted,
          },
        },
      });
      const feedbacks = await Feedback.findAll({
        where: {
          resumeId: resumeId,
        },
        include: [
          {
            model: db.user,
            required: false,
            as: "staff",
            attributes: {
              exclude: ["password", "salt"],
            },
          },
        ],
      });

      const userDetails = await db.user.findByPk(userId, {
        attributes: {
          exclude: ["password", "salt"],
        },
      });
      res.status(200).send({
        data: { feedbacks, userDetails },
        message: "Feedback details updated successfully.",
        status: "Success",
      });
    } else {
      res.status(500).send({
        data: null,
        message: "Something went wrong. Please try again.",
        status: "Error",
      });
    }
  } catch (err) {
    res.status(500).send({
      message: err.message || "Error updating feedback",
      status: "Error",
    });
  }
};
