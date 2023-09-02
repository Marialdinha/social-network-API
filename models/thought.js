// Require schema and model from mongoose
const mongoose = require('mongoose');
const reactionSchema = require('./reaction');

// Construct a new instance of the schema class
const thoughtSchema = new mongoose.Schema({
    // Configure individual properties using Schema Types
    thoughtText: { type: String, required: true, minlength: 1, maxlenght: 280,},
    createdAt: { type: Date, default: Date.now,  get: timestamp => new Date(timestamp).toLocaleString(), },
    username: { type: String, required: true },
    // Use built in date method to get current date
    reactions: [reactionSchema],
  });

  thoughtSchema.set('toJSON', { virtuals: true,  getters: true, });

  // Defining a virtual property 
  thoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length;
  });

  const Thought = mongoose.model('Thought', thoughtSchema);

  module.exports = Thought;