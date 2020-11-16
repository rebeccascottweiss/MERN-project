const childController = require("../controllers/child.controller");


module.exports = (app) => {

  app.get("/api/children", childController.getAll);

  app.get("/api/children/:id", childController.getOne);
  app.post("/api/children", childController.create);
  app.delete("/api/children/:id", childController.delete);
  app.put("/api/children/:id", childController.update);
};
