var Mongoose   = require('mongoose');
var Schema     = Mongoose.Schema;

// The data schema for an User
var userSchema = new Schema({
  email: {
      type: String,
      required: true,
      trim: true 
  },
  password: {
      type: String,
      required: true,
      trim: true
      
  },
  createdAt: { 
      type: Date,
      required: true,
      default: Date.now
  },
});

const user = Mongoose.model('user', userSchema);

module.exports = {
  User: user
};