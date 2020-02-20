var express = require('express');
var router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
var blog_controller = require('../controllers/blogController');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', blog_controller.test);

router.get('/findall', blog_controller.findall);

router.post('/create', blog_controller.blog_create);

router.get('/:id', blog_controller.blog_details);

router.put('/:id/update', blog_controller.blog_update);

router.delete('/:id/delete', blog_controller.blog_delete);


module.exports = router;