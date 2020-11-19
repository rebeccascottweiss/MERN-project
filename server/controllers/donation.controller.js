const Donation = require("../models/donation.model");


module.exports = {

  create: function (req, res) {
    console.log("a donation has been made");

    Donation.create(req.body)
      .then((donation) => {
        res.json(donation);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },
  getAll(req, res) {
    console.log("getAll donation method executed");

    Donation.find()
      .then((donations) => {
        res.json(donations);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },
  getOne(req, res) {
    console.log("getOne donation method executed", "url params:", req.params);
    Donation.findById(req.params.id)
      .then((donation) => {
        res.json(donation);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },
};