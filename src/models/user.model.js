const db = require('../../helper/db.connect');
const { v4: uuidv4 } = require('uuid');

const userModel = {
  getAllUsers: () => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM users`, (error, result) => {
        if (error) return reject(error.message);
        return resolve(result.rows)
      })
    })
  },

  //topUp
  getById: (id_user) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM users WHERE id_user=$1`, [id_user],
        (error, result) => {
          if (error) return reject(error.message)
          return resolve(result.rows)
        }
      )
    })
  },



  topUp: ({ id_top_up, sender_id, amount }) => {
    return new Promise((resolve, reject) => {
      db.query(`UPDATE users SET balance = balance + $1 WHERE id_user=$2`, [amount, sender_id], (err) => {
        if (err) {
          return reject(err.message)
        } else {
          db.query(`INSERT INTO top_up (id_top_up, sender_id, amount) VALUES ($1, $2, $3)`, [uuidv4(), sender_id, amount], (err, result) => {
            if (err) {
              return reject(err.message)
            } else {
              return resolve({ id_top_up, sender_id, amount })
            }
          })
        }
      })
    })
  },
}
module.exports = userModel;