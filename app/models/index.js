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
db.active_resumes = require("./activeResume.model.js")(sequelize, Sequelize);
db.skills = require("./skills.model.js")(sequelize, Sequelize);
db.resumeSample = require("./resumeSample.model.js")(sequelize, Sequelize);
db.education = require("./education.model.js")(sequelize, Sequelize);
db.project = require("./project.model.js")(sequelize, Sequelize);
db.award = require("./award.model.js")(sequelize, Sequelize);
db.languages = require("./languages.model.js")(sequelize, Sequelize);
db.onlineProfile = require("./onlineProfile.model.js")(sequelize, Sequelize);

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
db.active_resumes.belongsTo(db.user, { foreignKey: "userId" }); // ActiveResume belongs to one db.user
db.active_resumes.belongsTo(db.user, { foreignKey: 'userId' }); // ActiveResume belongs to one User

module.exports = db;
