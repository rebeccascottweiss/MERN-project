const donationController = require("../controllers/donation.controller");


module.exports = (app) => {
    app.post("/api/donation", donationController.create);
    app.get("/api/donation", donationController.getAll);
    app.get("/api/donation/:id", donationController.getOne);
};