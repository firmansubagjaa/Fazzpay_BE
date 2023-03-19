const { v4: uuidv4 } = require("uuid");
const bcrypt = require('bcrypt');
const db = require("../../helper/db.connect");
require("dotenv").config();

const authUserModel = {
  login: ({ email, password, pin }) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM users WHERE email=$1`, [email], (err, result) => {
        if (err) return reject(err.message);
        if (result.rows.length == 0)
          return reject("email/password is not correct");

        bcrypt.compare(password, result.rows[0].password, (err, hashingResult) => {
          if (err) return reject("email/password is incorrect");
          if (!hashingResult) return reject("password is incorrect");
          return resolve(result.rows[0]);

          // db.query(`SELECT * FROM users WHERE pin=$1`, [pin], (err, result) => {
          //   if (err) return reject(err.message);
          //   if (result.rows.length == 0) return reject('wrong pin');
        })
      });
    });
    // });
  },

  register: ({ firstname, lastname, email, password, pin, phone, balance, topup, amount }) => {
    return new Promise((success, failed) => {
      db.query(`INSERT INTO users (id_user, firstname, lastname, email, password, pin, phone, balance, topup, amount) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`, [uuidv4(), firstname, lastname, email, password, pin, phone, balance, topup, amount], (err, result) => {
        if (err) {
          return failed(err.message);
        } else {
          return success({ firstname, lastname, email, password, pin, phone, balance, topup, amount });
        }
      })
    })
  }
}

module.exports = authUserModel;