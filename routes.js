module.exports = router => {
  require('./routes/genre')(router);
  require('./routes/game')(router);

  return router;
};