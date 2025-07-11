import { Sequelize, DataTypes } from "sequelize";

const databaseURL = process.env.DATABASE_URL;

export const sequelize = new Sequelize(databaseURL, {
  dialect: "postgres",
  logging: false
});

const Users = sequelize.define("users", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true
  },
  name: DataTypes.TEXT,
  email: {
    type: DataTypes.STRING,
    unique: true
  }
});

const Products = sequelize.define("products", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true
  },
  name: DataTypes.TEXT,
  description: DataTypes.TEXT,
  price: DataTypes.INTEGER
});

// Associações
Users.hasMany(Products);
Products.belongsTo(Users);

export { Users, Products };