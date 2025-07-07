import { Sequelize, DataTypes } from 'sequelize';
import dbConfig from '../config/db.config.js';
import StudentModel from './student.model.js';
import CourseModel from './course.model.js';
import TeacherModel from './teacher.model.js';
import UserModel from './user.model.js';

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  dialect: dbConfig.dialect
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.User = UserModel(sequelize);
db.Student = StudentModel(sequelize, DataTypes);
db.Course = CourseModel(sequelize, DataTypes);
db.Teacher = TeacherModel(sequelize, DataTypes);

// Associations
db.Teacher.hasMany(db.Course);
db.Course.belongsTo(db.Teacher);

db.Course.belongsToMany(db.Student, { through: "CourseStudent" });
db.Student.belongsToMany(db.Course, { through: "CourseStudent" });

export default db;