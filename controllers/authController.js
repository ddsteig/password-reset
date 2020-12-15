const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const jwtDecode = require("jwt-decode");
const { getPersonByEmail } = require("../database/queries/user");
const { emailIsValid } = require("../util/validemail");

const createToken = (user) => {
  // Sign the JWT
  return jwt.sign(
    {
      sub: user.id,
      email: user.email,
    },
    process.env.JWT_SECRET,
    { algorithm: "HS256", expiresIn: "1h" }
  );
};

const hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    // Generate a salt at level 12 strength
    bcrypt.genSalt(12, (err, salt) => {
      if (err) {
        reject(err);
      }
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
          reject(err);
        }
        resolve(hash);
      });
    });
  });
};

const verifyPassword = (passwordAttempt, hashedPassword) => {
  return bcrypt.compare(passwordAttempt, hashedPassword);
};

/**
 * Does something
 * @author Dan Kaltenbaugh <d.a.kaltenbaugh@gmail.com>
 * @version 1.0.0
 * @param
 * @description
 * @module
 * @throws Will throw an error if thed
 * @returns {object} Either the ___ object, null or an Error
 * @todo complete this JSDoc entry
 */
const passwordActions = async (req, res, next) => {
  const { action } = req.query;
  switch (action) {
    case "reset": {
      try {
        const { email } = req.body;
        if (!emailIsValid(email)) {
          // TODO - System Log Call here
          return res.status(422).json({ message: `Invalid email ${email}` });
        }
        return findPerson(email).then(async (user) => {});
        // findPerson .catch will Hoist to the try... catch level automatically
      } catch (err) {
        // TODO - Add system log call here
        return res
          .status(400)
          .json({ message: `Unknown password ${action} error` });
      }
    }
  }
};

/**
 * Does something
 * @author Dan Kaltenbaugh <d.a.kaltenbaugh@gmail.com>
 * @version 1.0.0
 * @param
 * @description
 * @module
 * @throws Will throw an error if the
 * @returns {object} Either the ___ object, null or an Error
 * @todo complete this JSDoc entry
 */
const authPerson = async (req, res) => {
  console.log("authPerson -> req.body ", req.body);
  try {
    const { email, password } = req.body;

    const person = await getPersonByEmail(email);
    console.log("person", person);

    if (!person) {
      return res.status(403).json({ message: "Wrong email or password." });
    }

    const passwordValid = await verifyPassword(password, person.password);
    console.log("authPerson -> passwordValid", passwordValid);

    if (passwordValid) {
      const { username, password, ...rest } = person;
      const userInfo = Object.assign({}, { ...rest });
      const token = createToken(person);

      const decodedToken = jwtDecode(token);
      const expiresAt = decodedToken.exp;

      res.status(200).json({
        token,
        expiresAt,
        userInfo,
        message: "Successful authentication!",
      });
    } else {
      res.status(403).json({
        message: "Wrong email or password.",
      });
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = {
  authPerson,
  createToken,
  hashPassword,
  passwordActions,
  verifyPassword,
};
