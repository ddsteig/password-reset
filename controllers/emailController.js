/*** Documentation:
 * To make this token a one-time-use token, I encourage you to
 * use the user’s current password hash in conjunction with
 * the user’s created date (in ticks) as the secret key to
 * generate the JWT. This helps to ensure that if the user’s
 * password was the target of a previous attack (on an unrelated website),
 * then the user’s created date will make the secret key unique
 * from the potentially leaked password.
 * With the combination of the user’s password hash and created date,
 * the JWT will become a one-time-use token, because once the user
 * has changed their password, it will generate a new password hash
 * invalidating the secret key that references the old password
 * Reference: https://www.smashingmagazine.com/2017/11/safe-password-resets-with-json-web-tokens/
 **/
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("../database/models");
// import { User } from "../../database/models/user";
const {transporter} = require("../util/email");
const {getPasswordResetURL} = require("../util/email");
const {resetPasswordTemplate} = require("../util/email");
// import {
//   transporter,
//   getPasswordResetURL,
//   resetPasswordTemplate,
// } from "../../util/email";

// `secret` is passwordHash concatenated with user's createdAt,
// so if someones gets a user token they still need a timestamp to intercept.
usePasswordHashToMakeToken = ({
  password: passwordHash,
  _id: userId,
  createdAt: time,
}) => {
  const secret = passwordHash + "-" + time;
  const token = jwt.sign({ userId }, secret, {
    expiresIn: 3600, // 1 hour
  });
  return token;
}

module.exports = { 

  /*** Calling this function with a registered user's email sends an email IRL ***/
  /*** I think Nodemail has a free service specifically designed for mocking   ***/
  sendPasswordResetEmail: async (req, res) => {
    const { email } = req.params;
    let user;    
    try {
      user = await (await db.User.findOne({ email })).execPopulate();         
    } catch (err) {
      res.status(404).json("No user with that email");
    }
    
    const token = usePasswordHashToMakeToken(user);
    const url = getPasswordResetURL(user, token);
    const emailTemplate = resetPasswordTemplate(user, url);
   
    const sendEmail = () => {
      console.log(emailTemplate)
      transporter.sendMail(emailTemplate, (err, info) => {
        if (err) {
          res.status(500).json("Error sending email");          
        }
        console.log(`** Email sent **`, info);
      });
    };
    sendEmail();
  },

  receiveNewPassword: (req, res) => {
    const { userId, token } = req.params;
    const { password } = req.body;

    console.log(userId)
    console.log(token)
    console.log(password)

    db.User.findOne({ _id: userId })

      .then((user) => {
        const secret = user.password + "-" + user.createdAt;
        const payload = jwt.decode(token, secret);
        if (payload.userId === user.id) {
          bcrypt.genSalt(10, function (err, salt) {
            if (err) return;
            bcrypt.hash(password, salt, function (err, hash) {
              if (err) return;
              db.User.findOneAndUpdate({ _id: userId }, { password: hash })
                .then(() => res.status(202).json("Password changed accepted"))
                .catch((err) => res.status(500).json(err));
            });
          });
        }
      })

      .catch(() => {
        res.status(404).json("Invalid user");
      });
  },
};
