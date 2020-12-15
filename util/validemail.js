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

// Thanks to https://tylermcginnis.com/validate-email-address-javascript/
const emailIsValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }
  
  module.exports = {
    emailIsValid,
  }