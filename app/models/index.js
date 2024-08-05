const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.session = require("./session.model.js")(sequelize, Sequelize);
db.user = require("./user.model.js")(sequelize, Sequelize);
db.role = require("./role.model.js")(sequelize, Sequelize);
db.certification = require("./certification.model.js")(sequelize, Sequelize);
db.experience = require("./experience.model.js")(sequelize, Sequelize);
db.skills = require("./skills.model.js")(sequelize, Sequelize);
db.education = require("./education.model.js")(sequelize, Sequelize);
db.project = require("./project.model.js")(sequelize, Sequelize);
db.award = require("./award.model.js")(sequelize, Sequelize);
db.languages = require("./languages.model.js")(sequelize, Sequelize);
db.onlineProfile = require("./onlineProfile.model.js")(sequelize, Sequelize);
db.resumes = require("./resumes.model.js")(sequelize, Sequelize);

// foreign key for session
db.user.hasMany(db.session, { onDelete: "CASCADE" });
db.session.belongsTo(db.user, { onDelete: "CASCADE" });

db.user.belongsTo(db.role, { foreignKey: "roleId" }); // db.user belongs to one db.role
db.user.hasMany(db.experience, { foreignKey: "userId" }); // db.user has many db.experience
db.user.hasMany(db.certification, { foreignKey: "userId" }); // db.user has many Certifications
db.user.hasMany(db.education, { foreignKey: "userId" }); // User has many Educations
db.user.hasMany(db.project, { foreignKey: "userId" }); // User has many Projects
db.user.hasMany(db.award, { foreignKey: "userId" }); // User has many Awards
db.user.hasMany(db.skills, { foreignKey: "userId" }); // db.user has many Skills
db.user.hasMany(db.languages, { foreignKey: "userId" }); // db.user has many Languages
db.user.hasMany(db.onlineProfile, { foreignKey: "userId" }); // db.user has many Online Profile
db.user.hasMany(db.resumes, { foreignKey: "userId" }); // db.user has many Resumes
db.resumes.hasMany(db.feedback, { foreignKey: "resumeId" }); // db.resumes has many Feedbacks
db.user.hasMany(db.feedback, { foreignKey: "staffId"}); // db.resumes has many Feedbacks
db.feedback.belongsTo(db.user, { foreignKey: "staffId", as: "staff" }); // A feedback belongs to a user (staff)
db.feedback.belongsTo(db.resumes, { foreignKey: "resumeId" }); // A feedback belongs to a resume

module.exports = db;
