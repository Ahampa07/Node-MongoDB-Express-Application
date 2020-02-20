var Blog = require('../models/blog');
var User = require('../models/user')

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the blog controller!');
};

exports.findall = function (req, res,next) {
   Blog.find({},function (err, blog) {
        if (err) return next(err);
        res.send(blog);
    })
 };

//toArray(function(err, docs){
//    console.log("retrieved records:");
//    console.log(docs);

exports.blog_create = function (req, res,next) {
    var blog = new Blog(
        {
            name: req.body.name,
            comments: req.body.comments
        }
    );

    blog.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Blog Created successfully')
    })
};

exports.blog_details = function (req, res,next) {
    Blog.findById(req.params.id, function (err, blog) {
        if (err) return next(err);
        res.send(blog);
    })
};

exports.blog_update = function (req, res,next) {
    Blog.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, blog) {
        if (err) return next(err);
        res.send('Blog udpated.');
    });
};

exports.blog_delete = function (req, res,next) {
    Blog.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};