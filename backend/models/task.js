var mongoose = require('mongoose');

//Shema
var TaskSchema = new mongoose.Schema({
  title: String,
  description: String,
  deadline: Date,
  status: Boolean
});

// Export the Mongoose model
module.exports = mongoose.model('Task', TaskSchema);