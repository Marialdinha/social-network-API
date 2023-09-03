const { Thought } = require('../models');

module.exports = {
  // create a new Thought
  async createThought(req, res) {
    try {
      const dbThoughtData = await Thought.create(req.body);
      res.json(dbThoughtData);
      } catch (err) {
        res.status(500).json(err);
      }
      },
      
 //get all thoughts 
 async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
