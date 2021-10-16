const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("dev", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  port: 8889
});

const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports =  { connection, sequelize }