var mongoose = require('mongoose');

var EmployeeSchema = new mongoose.Schema({
  name: String,
  title: String,
  position: String,
  date_joined: String,
  imgUrl: String
},
{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } 
}
);

module.exports = mongoose.model('Employee', EmployeeSchema);
