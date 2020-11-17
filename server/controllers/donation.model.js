const Donation = require("../models/donation.model");


module.exports = {

  create: function (req, res) {
    console.log("create method executed");

    Donation.create(req.body)
      .then((donation) => {
        res.json(donation);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },
  getAll(req, res) {
    console.log("getAll method executed");

    Donation.find()
      .then((donations) => {
        res.json(donations);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },
  getOne(req, res) {
    console.log("getOne method executed", "url params:", req.params);
    Donation.findById(req.params.id)
      .then((donation) => {
        res.json(donation);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },
};