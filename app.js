const db = require('./helper/db.connect')
const cors = require('cors')
const express = require('express')
const router = require('./src/routes')
const app = express()
const port = 5000

app.use(cors({ origin: "*" })) //semua bisa akses
//body-parser
app.use(express.urlencoded({ extended: true })) //bentuk body
app.use(express.json()) //bentuk json

//menerima router
app.use(express.static("public"));

//routes parent
app.use("/api/v1", router)


app.get("*", (req, res) => {
  return res.json({
    status: 404,
    message: "Not Found",
  })
})

//listen
app.listen(port, () => {
  console.log(`port sedang berjalan di ${port}`)
})



