const db = require("../models");
const Resumes = db.resumes;

const { CohereClient } = require("cohere-ai");

const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY,
});


exports.askAI = async (req, res) => {
    const { userId, resumeId, jobTitle } = req.body;

    try {
      const resumeData = await Resumes.findByPk(resumeId);
      console.log(resumeData)
      const parsedResumeData = {
        experience: JSON.parse(resumeData?.experience),
        education: JSON.parse(resumeData?.education),
        skills: JSON.parse(resumeData.skills)
      }
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
        data: {comments: commentChat?.text, matchingScore: scoreChat?.text},
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