var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema({
    name: {type: String, required: true},
    comments:[ {type: String, required: true}],
});


// Export the model
module.exports = mongoose.model('Blog', blogSchema);