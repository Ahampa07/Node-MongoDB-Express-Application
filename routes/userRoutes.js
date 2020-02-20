var express = require('express');
var router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
var user_controller = require('../controllers/userController');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', user_controller.test);

router.get('/findall', user_controller.findall);

router.post('/create', user_controller.user_create);

router.get('/:id', user_controller.user_details);

router.put('/:name/update', user_controller.user_update);

router.get('/myfriends/:name', user_controller.get_friend);


router.delete('/:id/delete', user_controller.user_delete);

router.get('/:name/1',user_controller.levelOnefriend);

router.get('/:name/2',user_controller.levelTwofriend);

module.exports = router;