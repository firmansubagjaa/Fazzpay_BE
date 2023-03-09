const express = require("express");
const db = require('./helper/db.connect')
const { v4: uuid } = require("uuid");

const topupModel = {
  // addPhoneNumber: (id_user, firstname, lastname, email, password, pin, phone, balance) => {
  //   return new Promise((resolve, reject) => {
  //     db.query(`INSERT INTO users VALUES ($1,$2,$3,$4,$5,$6,$7,$8)`, [id_user, firstname, lastname, email, password, pin, phone, balance] )
  //   })
  // }

  // editPhoneNumber: ()


  // addTopUp: (id_user) => {
  //   return new Promise((resolve, reject) => {
  //     db.query(`INSERT INTO users VALUES ($1,$2,$3)`), (err, result) => {
  //       if 
  //       }
  //   })
  // }
}