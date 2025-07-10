import { Sequelize, DataTypes } from "sequelize";

const databaseURL = process.env.DATABASE_URL;

export const sequelize = new Sequelize(databaseURL, {
  dialect: "postgres",
  logging: false
});

export const Users = sequelize.define("users", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  name: DataTypes.TEXT,
  email: {
    type: DataTypes.STRING,
    unique: true
  }
});