// const db = require('../../helper/db.connect')
// const { v4: uuidv4 } = require('uuid')

// const historyModel = {
//   getReceiverByID: ({ receiver_id }) => {
//     return new Promise((resolve, reject) => {
//       db.query(`SELECT * FROM transfer WHERE receiver_id = ${receiver_id}`, (err, res) => {
//         if (err) {
//           return reject(err.message)
//         } else {
//           return resolve({ receiver_id })
//         }
//       })
//     })

//   }
// }

// module.exports = historyModel;