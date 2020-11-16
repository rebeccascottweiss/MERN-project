
const Child = require("../models/child.model");


module.exports = {

  create: function (req, res) {
    console.log("create method executed");

    Child.create(req.body)
      .then((child) => {
        res.json(child);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },


  getAll(req, res) {
    console.log("getAll method executed");
    Child.find()
      .then((children) => {
        res.json(children);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  getOne(req, res) {
    console.log("getOne method executed", "url params:", req.params);
    Child.findById(req.params.id)
      .then((child) => {
        res.json(child);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  delete(req, res) {
    console.log("delete method executed", "url params:", req.params);

    Child.findByIdAndDelete(req.params.id)
      .then((child) => {
        res.json(child);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  update(req, res) {
    console.log("update method executed", "url params:", req.params);
    Child.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true,
    })
      .then((child) => {
        res.json(child);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },
};
