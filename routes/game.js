const {index, show, create, update, destroy} = require('../controllers/game');


module.exports = router => {
  router.get("/game", index);
  router.get("/game/:id", show);
  router.post("/game", create);
  router.put("/game",  update);
  router.delete("/game", destroy);
  return router;
};