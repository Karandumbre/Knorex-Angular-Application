//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var knorexDB = new Schema({
  options: Array,
});

// Compile model from schema
const knorexDBJson = mongoose.model('knorexDBJson', knorexDB, 'knorexDB');

module.exports = knorexDBJson;