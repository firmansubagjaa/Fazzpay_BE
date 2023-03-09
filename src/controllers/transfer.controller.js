const transferModel = require('../models/transfer.model')
const userModel = require('../models/user.model')

const transferController = {
  add: async (req, res) => {
    const request = {
      ...req.body
    }
    try {
      const result = await transferModel.add(request)
      return res.status(201).send({ data: result })
    } catch (error) {
      return res.status(500).send(error)
    }
  }

  // return transferModel.add(req.body)
  //   .then((result) => {
  //     res.status(200).send({
  //       Message: "Success request to server!",
  //       Data: result,
  //     })
  //   }).catch((error) => {
  //     res.status(400).send({
  //       message: "failed request to server",
  //       Data: error,
  //     })
  //   })
}


module.exports = transferController;