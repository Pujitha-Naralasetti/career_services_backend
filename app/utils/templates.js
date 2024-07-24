const templateData = [
  {
    profileSummary:
      "Highly motivated and results-oriented software engineer with 5+ years of experience in designing, developing, and implementing complex web applications. Skilled in a variety of programming languages and frameworks, including JavaScript, React, and Node.js. Proven ability to work independently and as part of a team to deliver high-quality solutions on time and within budget.",
    personalInfo:
      '{"name":"First Name Last Name","address":"123 Main Street, Anytown, CA 12345","phone":"(555) 555-5555","email":"john.doe@example.com","linkedIn":"https://www.linkedin.com/in/johndoe"}',
    education:
      '[{"institutionName":"Oklahoma Christian University","degree":"Bachelor of Arts /Bachelor of Science","course":"XX /B.B.A","startDate":"2024-07-22T03:02:22.564Z","endDate":"2024-07-22T03:02:22.564Z","gpa":"3.8","address":"Oklahoma City, OK","awards":["Pat on the back"],"courseWork":[]}]',
    experience:
      '[{"company":"Employer","designation":"Your Title","isInternship":false,"jobType":"Full Time","startDate":"2024-07-22T03:02:22.564Z","endDate":"2024-07-22T03:02:22.564Z","address":"City, State","experiencePoints":["Accomplished {X} as measured by {Y}, by doing {Z}","Action + Project/Problem + Results = Accomplishment","Three bullet points is sufficient for the most relevant position."]},{"company":"Employer","designation":"Your Title","isInternship":false,"jobType":"Full Time","startDate":"2024-07-22T03:02:22.564Z","endDate":"2024-07-22T03:02:22.564Z","address":"City, State","experiencePoints":["Filed papers and organized 100+ employee documents a month to ensure compliance with employment law & successfully passed the annual audit all three years in the role.","Led a 5-person leadership team to increase student participation by 100% from 50 to 100 members by creating a stronger social media presence."]},{"company":"Employer","designation":"Your Title","isInternship":false,"jobType":"Full Time","startDate":"2024-07-22T03:02:22.564Z","endDate":"2024-07-22T03:02:22.564Z","address":"City, State","experiencePoints":["Developed concepts and designs for 10 clients, including consumer products, electronics, and enterprise technology, utilizing Adobe Photoshop and Illustrator.","Collaborated with the IT team to develop an online application submission and tracking system, reducing cost by 10%."]}]',
    skills:
      '{"hardSkills":["JavaScript (ES6+)","React","Node.js","Express.js","MongoDB","Git"],"languageSkills":["English (fluent)","Spanish (conversational)"]}',
    templateType: 1,
    userId: null,
  },
  {
    profileSummary:
      "Tells the reader the purpose of your resume in 3 (2-4 is okay) sentences • Should identify the kind of work you want to perform • If seeking an internship or co-op, include the time period when you are available to start. Example: Seeking a summer 2020 internship in Marketing or Public Relations.",
    personalInfo:
      '{"name":"First Name Last Name","address":"123 Main Street, Anytown, CA 12345","phone":"(555) 555-5555","email":"john.doe@example.com","linkedIn":"https://www.linkedin.com/in/johndoe"}',
    education:
      '[{"institutionName":"Oklahoma Christian University","degree":"Bachelor of Arts /Bachelor of Science","course":"XX /B.B.A","startDate":"2024-07-22T14:37:53.485Z","endDate":"2024-07-22T14:37:53.485Z","gpa":"3.8","address":"Oklahoma City, OK"}]',
    experience:
      '[{"company":"Name of Company","designation":"Job Role","isInternship":false,"jobType":"Full Time","startDate":"2024-07-22T14:37:53.485Z","endDate":"2024-07-22T14:37:53.485Z","address":"City, State","experiencePoints":["Accomplished {X} as measured by {Y}, by doing {Z}","Action + Project/Problem + Results = Accomplishment","Three bullet points is sufficient for the most relevant position."]},{"company":"Name of Company","designation":"Job Role","isInternship":false,"jobType":"Full Time","startDate":"2024-07-22T14:37:53.485Z","endDate":"2024-07-22T14:37:53.485Z","address":"City, State","experiencePoints":["Filed papers and organized 100+ employee documents a month to ensure compliance with employment law & successfully passed the annual audit all three years in the role.","Led a 5-person leadership team to increase student participation by 100% from 50 to 100 members by creating a stronger social media presence."]},{"company":"Name of Company","designation":"Job Role","isInternship":false,"jobType":"Full Time","startDate":"2024-07-22T14:37:53.485Z","endDate":"2024-07-22T14:37:53.485Z","address":"City, State","experiencePoints":["Developed concepts and designs for 10 clients, including consumer products, electronics, and enterprise technology, utilizing Adobe Photoshop and Illustrator.","Collaborated with the IT team to develop an online application submission and tracking system, reducing cost by 10%."]}]',
    templateType: 2,
    userId: null,
  },
  {
    profileSummary:
      "Analytic-focused data professional with 2+ years’ experience developing computational models and executing statistical projects to drive insights. Demonstrated ability to translate complex datasets into actionable information and support overarching research initiatives.",
    personalInfo:
      '{"name":"Ike T. Eagle","address":"123 Main Street, Anytown, CA 12345","phone":"(555) 555-5555","email":"john.doe@example.com","linkedIn":"https://www.linkedin.com/in/johndoe"}',
    education:
      '[{\"institutionName\":\"Oklahoma Christian University\",\"degree\":\"Bachelor of Science\",\"course\":\"Computer Engineering\",\"startDate\":\"2024-07-23T08:52:48.097Z\",\"endDate\":\"2024-07-23T08:52:48.097Z\",\"gpa\":\"3.8\",\"address\":\"Edmond, OK\",\"awards\":[\"Pat on the back\"],\"courseWork\":[]}]',
    experience:
      '[{\"company\":\"Oklahoma Christian University\",\"designation\":\"Job Title\",\"isInternship\":false,\"jobType\":\"Full Time\",\"startDate\":\"2024-07-23T08:52:48.097Z\",\"endDate\":\"2024-07-23T08:52:48.097Z\",\"address\":\"City, State\",\"experiencePoints\":[\"Collaborated with cross-functional team of computer, electrical, and mechanical engineers to define and prioritize data science projects, driving $1.5M NIST-funded research in multimedia storage systems\",\"Conducted exploratory data analysis (EDA) on large datasets using Python and SQL, identifying key trends and patterns to inform research focused on multimedia bit rate conversion\",\"Conducted statistical analysis of experimental results to evaluate the effectiveness of algorithms and models\",\"Developed software tools and libraries in Python to facilitate data analysis, visualization, and modeling\",\"Presented weekly research updates with Tableau dashboards and made recommendations to primary investigator on study direction\"]}]',
    projects: '[{\"title\":\"\",\"company\":\"Oklahoma Christian University\",\"role\":\"Undergraduate Researcher for the Computer Science Lab\",\"link\":\"\",\"startDate\":\"2024-07-23T08:52:48.097Z\",\"endDate\":\"2024-07-23T08:52:48.097Z\",\"address\":\"Edmond, OK\",\"projectPoints\":[\"Used SQL to extract and manipulate data from relational databases for $250K funding\",\"Maintained and updated existing data pipelines and extract, transform, and load ETL workflows to ensure data integrity and reliability\",\"Implemented data cleaning and preprocessing from raw Excel data to transfer into Stata for further analyses\"]}]',
    skills:
      '[\"Simple Linear Regression\",\"Multivariate Linear Regression\",\"Statistical Modeling\",\"Data Integrity\",\"Parametric Tests\",\"Nonparametric Tests\",\"Sampling Methods\",\"Natural Language Processing (NLP)\",\"Tableau\",\"R\",\"VBA\",\"Excel\",\"Python\",\"SQL\",\"Java\"]',
    templateType: 3,
    userId: null,
  },
  {
    profileSummary:
      "Highly motivated and results-oriented software engineer with 5+ years of experience in designing, developing, and implementing complex web applications. Skilled in a variety of programming languages and frameworks, including JavaScript, React, and Node.js. Proven ability to work independently and as part of a team to deliver high-quality solutions on time and within budget.",
    personalInfo:
      '{"name":"Ike T. Eagle","address":"123 Main Street, Anytown, CA 12345","phone":"(555) 555-5555","email":"john.doe@example.com","linkedIn":"https://www.linkedin.com/in/johndoe"}',
    education:
      '[{"institutionName":"Oklahoma Christian University","degree":"Bachelor of Arts /Bachelor of Science","course":"XX /B.B.A","startDate":"2024-07-22T03:02:22.564Z","endDate":"2024-07-22T03:02:22.564Z","gpa":"3.8","address":"Oklahoma City, OK","awards":["Pat on the back"],"courseWork":[]}]',
    experience:
      '[{"company":"Employer","designation":"Your Title","isInternship":false,"jobType":"Full Time","startDate":"2024-07-22T03:02:22.564Z","endDate":"2024-07-22T03:02:22.564Z","address":"City, State","experiencePoints":["Accomplished {X} as measured by {Y}, by doing {Z}","Action + Project/Problem + Results = Accomplishment","Three bullet points is sufficient for the most relevant position."]},{"company":"Employer","designation":"Your Title","isInternship":false,"jobType":"Full Time","startDate":"2024-07-22T03:02:22.564Z","endDate":"2024-07-22T03:02:22.564Z","address":"City, State","experiencePoints":["Filed papers and organized 100+ employee documents a month to ensure compliance with employment law & successfully passed the annual audit all three years in the role.","Led a 5-person leadership team to increase student participation by 100% from 50 to 100 members by creating a stronger social media presence."]},{"company":"Employer","designation":"Your Title","isInternship":false,"jobType":"Full Time","startDate":"2024-07-22T03:02:22.564Z","endDate":"2024-07-22T03:02:22.564Z","address":"City, State","experiencePoints":["Developed concepts and designs for 10 clients, including consumer products, electronics, and enterprise technology, utilizing Adobe Photoshop and Illustrator.","Collaborated with the IT team to develop an online application submission and tracking system, reducing cost by 10%."]}]',
    skills:
      '{"hardSkills":["JavaScript (ES6+)","React","Node.js","Express.js","MongoDB","Git"],"languageSkills":["English (fluent)","Spanish (conversational)"]}',
    templateType: 4,
    userId: null,
  },
];

module.exports = templateData;
