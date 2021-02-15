var express = require('express');
var router = express.Router();
let address = require('../controllers/Address')
/* GET addresss listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/address', address.create);
router.put('/address/:id', address.update);
router.get('/address', address.getAll);
router.get('/address/:id', address.getByid);
router.delete('/address/:id', address.delete);
module.exports = router;
