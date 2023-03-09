const userModel = require('../models/user.model');

const userController = {
  getAllUsers: (req, res) => {
    return userModel.getAllUsers().then((result) => {
      return res.status(200).send({
        Message: "Success request to server",
        Data: result,
      })
    })
  },

  getById: (req, res) => {
    return userModel.getById(req.params.id).then((result) => {
      return res.status(200).send({
        Message: "Success request to server!",
        Data: result,
      });
    }).catch((error) => {
      return res.status(400).send({
        Message: "Failed request to server!",
        Error: error,
        Data: []
      })
    })
  },

  topUp: async (req, res) => {
    const request = {
      ...req.body,
    };
    try {
      const result = await userModel.topUp(request);
      return res.status(201).send({ data: result })
    } catch (err) {
      return res.status(500).send(err)
    }
  }
}

module.exports = userController;