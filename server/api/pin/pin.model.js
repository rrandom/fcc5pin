'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var PinSchema = new Schema({
  title: {
    type: String,
    default: ''
  },
  source: {
    type: String,
    trim: true,
    required: 'Source cannot be blank'
  },
  submitter: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  created: {
    type: Date,
    default: Date.now
  },
  active: Boolean
});

module.exports = mongoose.model('Pin', PinSchema);
