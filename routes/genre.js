
const {index, show, create, update, destroy} = require('../controllers/genre');

module.exports = router => {
router.get('/genre', index);
router.get('/genre/:id', show);
router.post('/genre', create);
router.put('/genre', update);
router.delete('/genre', destroy);
  return router;
};