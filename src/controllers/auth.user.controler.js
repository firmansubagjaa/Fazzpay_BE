const authUserModel = require("../models/auth.user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { JWT_PRIVATE_KEY } = process.env;


const authUserController = {
  login: (req, res) => {
    return authUserModel
      .login(req.body)
      .then((result) => {
        jwt.sign({ id: result.id, }, JWT_PRIVATE_KEY, { expiresIn: "1d" }, (err, token) => {
          // console.log(token)
          return res.status(201).send({
            message: "SUCCESS",
            data: {
              token,
              id: result.id,
              firstname: result.firstname,
              lastname: result.lastname,
              email: result.email,
              phone: result.phone,
              balance: result.balance,
              topup: result.topup,
              amount: result.amount,
            }
          })
        }
        )
      }).catch((error) => {
        return res.status(500).send({ message: error })
      })
  },

  register: (req, res) => {
    // error handling
    if (req.body.firstname == "" && req.body.lastname == "" && req.body.email == "" && req.body.password == "") return res.status(500).send({ message: "masukkan data diri anda" }) // if account not input

    //jika tidak lengkap
    if (req.body.firstname == "") return res.status(500).send({ message: "masukkan data dengan lengkap" })
    if (req.body.lastname == "") return res.status(500).send({ message: "masukkan data dengan lengkap" })
    if (req.body.email == "") return res.status(500).send({ message: "masukkan data dengan lengkap" })
    if (req.body.password == "") {
      return res.status(500).send({ message: "masukkan data dengan lengkap" })
      // if (req.body.pin == "") return res.status(500).send({ message: "masukkan PIN" })
      // jika angka kurang dari 6

    } else {
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
          return res.status(500).send({ message: err })
        } else {
          const request = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: hash,
            pin: req.body.pin,
            phone: req.body.phone,
            balance: req.body.balance,
            topup: req.body.topup,
            amount: req.body.amount,
          }
          return authUserModel
            .register(request)
            .then((result) => {
              return res.status(201).send({
                Message: "Success request to server!",
                Data: "ADD_SUCCESS",
              });
            }).catch((error) => {
              // console.log(error)
              return res.status(400).send({
                Message: "Failed request to server!",
                Data: error,
              })
            })
        }
      })
    }
  }
}

module.exports = authUserController;