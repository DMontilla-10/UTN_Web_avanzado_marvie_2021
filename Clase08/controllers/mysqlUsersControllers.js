const mysqlConnection = require("../config/mysql");

const getMysqlUsers = (req, res) => {
  mysqlConnection.query("select * from usuarios", (error, data) => {
    if (error) {
      console.log(error);
    } else {
      res.status(200).send({ data: data });
    }
  });
};

const createNewUser = (req, res) => {
  const body = req.body;
  const firstName = body.firstName;
  const lastName = body.lastName;
  const email = body.email;
  const password = body.password;

  mysqlConnection.query(
    "INSERT INTO usuarios (firstName, lastName, email, password) VALUES ('" +
      firstName +
      "', '" +
      lastName +
      "', '" +
      email +
      "', '" +
      password +
      "')",
    (error, data) => {
      if (error) {
        console.log(error);
      } else {
        res.status(200).send({ data: data });
      }
    }
  );
};

module.exports = { getMysqlUsers, createNewUser };
