// Require schema and model from mongoose
const {  Schema, model, Types } = require('mongoose');

// Construct a new instance of the schema class
const userSchema = new Schema({
  // Configure individual properties using Schema Types
  username: { type: String, required: true, unique: true, trim: true, },
  email: { type: String, required: true, unique: true, 
           match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,},
  thoughts:[{type: Schema.Types.ObjectId, ref: 'thought',}],
  friends:[{type: Schema.Types.ObjectId,ref: 'user',}],
  // Use built in date method to get current date
  lastAccessed: { type: Date, default: Date.now },
});

userSchema.set('toJSON', { virtuals: true,  getters: true, });

// Defining a virtual property 'friendCount' which returns the number of friends in the friends array
userSchema.virtual('friendCount').get(function(){
  return this.friends.length;
});

// Using mongoose.model() to compile a model based on the schema 'userSchema'
const User = model('User', userSchema);

// Create new instances of the model, a document
// Book.create([
//   { title: 'Hello, World', price: 5, inStock: true },
//   { title: 'Hello World 2.0', price: 10, inStock: false },
//   { title: 'Hello, World 3,0', price: 7, inStock: true },
//   { title: 'Hello World 4.0', price: 20, inStock: true },
//   { title: 'Hello, World 5.0', price: 2, inStock: false },
//   { title: 'Hello World Infinity', price: 25, inStock: false },
//   { title: 'Hello World Infinity and Beyond', price: 4, inStock: true },
// ]);

module.exports = User;
