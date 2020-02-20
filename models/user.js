var mongoose = require('mongoose');

var Schema = mongoose.Schema;          // schema is a specfic data structure of a document

var userSchema = new Schema({
    name: {type: String, required: true, max: 100}
    
});


// need to export the model
module.exports = mongoose.model('User', userSchema);