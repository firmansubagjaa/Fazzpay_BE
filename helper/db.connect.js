const { Client } = require("pg")

const db = new Client({
  user: "postgres",
  password: "@Avenged123",
  database: "fazzpay_be",
  host: "localhost",
  port: "5432",
})

db.connect((error) => {
  if (error) {
    console.error(`failed to connect database because ${error}`)
  } else {
    console.log(`connected to database ${db.database}`)
  }
})

module.exports = db;