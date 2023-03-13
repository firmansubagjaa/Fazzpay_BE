const { Client } = require("pg")

const db = new Client({
  user: "postgres",
  password: "@AvengedFirman123",
  database: "postgres",
  host: "db.evlhpxmvvrjsmrbykzsx.supabase.co",
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