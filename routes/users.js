var express = require('express');
var router = express.Router();
let user = require('../controllers/Users')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/user', user.create);
router.put('/user/:id', user.update);
router.get('/user', user.getAll);
router.get('/user/:id', user.getByid);
router.delete('/user/:id', user.delete);
module.exports = router;
