const db = require("../models");

/**
 * Gets Person info based on their email address.
 * @example getPersonByEmail('john@doe.com')
 * @author Dan Kaltenbaugh <d.a.kaltenbaugh@gmail.com>
 * @version 1.0.0
 * @param {string} email - email used to find a unique Person
 * @description Get one Person from the database that matches email. *  Email is unique in the database model. Retrieves all contents
 *  associated with the person entry from the Person model/table.
 *  Returns null if email is not found in the database.
 * @module person/getPersonByEmail
 * @throws Will throw an error if the database is not accessible
 * @returns {object} Either the Person object, null or an Error
 * @todo Write the auto hashing Password into the Sequelize Person Model
 */
const getPersonByEmail = async (email) => {
  console.log("getPersonByEmail query: ", email);
  try {
    const user = await db.User.findOne(
      { email: email },
      function (err, userEmail) {
        if (err) throw err;
        console.log(userEmail);
        return userEmail;
      }
    );
    return user;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getPersonByEmail,
};
