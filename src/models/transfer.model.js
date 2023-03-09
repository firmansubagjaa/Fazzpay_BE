const db = require("../../helper/db.connect");
const { v4: uuidv4 } = require("uuid")

const transferModel = {
  add: ({ sender_id, receiver_id, amount }) => {
    return new Promise((resolve, reject) => {
      db.query(
        `UPDATE users SET balance = balance - $1 WHERE id_user = $2`, [amount, sender_id],
        (err) => {
          if (err) {
            return reject(err.message)
          } else {
            db.query(
              `UPDATE users SET balance = balance + $1 WHERE id_user = $2`, [amount, receiver_id],
              (err) => {
                if (err) {
                  return reject(err.message)
                } else {
                  db.query(
                    `INSERT INTO transfer (transfer_id, sender_id, receiver_id, amount) VALUES ($1, $2, $3, $4)`, [uuidv4(), sender_id, receiver_id, amount],
                    (err, result) => {
                      if (err) {
                        return reject(err.message)
                      } else {
                        return resolve({ Message: `Success transfer to ${receiver_id} with nominal ${amount}` })
                      }
                    }
                  )
                }
              }
            )
          }
        }
      )
    })
  }

}

module.exports = transferModel