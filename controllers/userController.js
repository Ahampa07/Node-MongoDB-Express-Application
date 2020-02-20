var User = require('../models/user');
var Blog=require('../models/blog')

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.findall = function (req, res,next) {
   User.find({},function (err, user) {
        if (err) return next(err);
        res.send(user);
    })
 };

//toArray(function(err, docs){
//    console.log("retrieved records:");
//    console.log(docs);

exports.user_create = function (req, res,next) {
    var user = new User(
        {
            name: req.body.name,
        }
    );

    user.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('User Created successfully')
    })
};

exports.user_details = function (req, res,next) {
    User.findById(req.params.id, function (err, user) {
        if (err) return next(err);
        res.send(user);
    })
};

exports.get_friend = function (req, res,next) {
    User.find({'name':req.params.name}, function (err, user) {
        if (err) return next(err);
        
        res.send(user);
    })
};

exports.user_update = function (req, res,next) {
          User.update({'name':req.params.name}, {$set :req.body}, function (err, user) {
        if (err) return next(err);  
        res.send('User udpated.');
    })
};

exports.levelOnefriend = function (req, res,next) {
         let new_list=[];
           Blog.find({'comments':req.params.name},function (err, blogs) {
           if (err) return next(err);
           console.log(blogs)
           
           for(let a=0;a<blogs.length;a++){
           comment=blogs[a]['comments']
           for(let i=0;i< comment.length;i++){
               if(comment[i]!=req.params.name ) if( new_list.indexOf(comment[i]) === -1) new_list.push(comment[i])
           }
       } 
               console.log(req.params.name)
    console.log(new_list)
        res.send(new_list);
    })
}

exports.levelTwofriend = async function (req, res,next) {
         let new_list=[];
        let  ans=[];
          await Blog.find({'comments':req.params.name},function (err, blogs) {
           if (err) return next(err);
           for(let a=0;a<blogs.length;a++){
           comment=blogs[a]['comments']
           for(let i=0;i< comment.length;i++){
               if(comment[i]!=req.params.name && new_list.indexOf(comment[i]) === -1) new_list.push(comment[i]);
           }
       }
           })
               console.log(new_list)
       for(let k=0;k<new_list.length;k++){
          await Blog.find({'comments':new_list[k]},function (err, blogs) {
               if (err) return next(err);
               //console.log('iterating friends list')
               for(let a=0;a<blogs.length;a++){
               comment=blogs[a]['comments']
//               console.log(comment)
               for(let i=0;i< comment.length;i++){
                   if(comment[i]!=req.params.name && comment[i]!=new_list[k] && ans.indexOf(comment[i]) === -1 && new_list.indexOf(comment[i]) === -1 )
                   {
                       ans.push(comment[i])
                       //console.log('adding sec friend ', comment[i])
                   }
                            }
                } 
                
         })
       }
               console.log(ans)
           res.send(ans)
          

}


exports.user_delete = function (req, res,next) {
    User.findByIdAndRemove({'name':req.params.name}, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};