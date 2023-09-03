const { Thought, User } = require('../models');

module.exports = {
  // create a new Thought
  async createThought(req, res) {
    try {
      const dbThoughtData = await Thought.create(req.body);
      const user = await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $addToSet: { thoughts: dbThoughtData._id } },
        { new: true }
      );

      if (!user) {
        return res.status(404).json({
          message: 'Thpought created, but found no user with that ID',
        });
      }

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

    //get single thought
    async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({_id: req.params.toughtId })

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //delete thought
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndRemove({ _id: req.params.toughtId });

      if (!thought) {
        return res.status(404).json({ message: 'No thought with this id!' });
      }

      res.json({ message: 'Thought successfully deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },

   // update thought
        async updateThought(req, res) {
          try {
            const thought = await Thought.findOneAndUpdate(
              { _id: req.params.toughtId },
              { $set: req.body },
              { runValidators: true, new: true }
            );
      
            if (!thought) {
              return res.status(404).json({ message: 'No thought with this id!' });
            }
            res.json(thought);
           } catch (err) {
          console.log(err);
          res.status(500).json(err);
      }
    },

    // create reacton
    async createReaction(req, res) {
      try {
        const thought = await Thought.findOneAndUpdate(
          { _id: req.params.toughtId },
          { $set: req.body },
          { runValidators: true, new: true }
        );
  
        if (!thought) {
          return res.status(404).json({ message: 'No thought with this id!' });
        }
        res.json(thought);
       } catch (err) {
      console.log(err);
      res.status(500).json(err);
  }
},
};
