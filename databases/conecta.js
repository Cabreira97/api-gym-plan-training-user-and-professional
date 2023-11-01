import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  "db_api_admin", "thiago", "123456", {
  dialect: "mysql",
  host: "localhost",
  port: 3306
});