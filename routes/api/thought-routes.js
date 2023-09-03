// Endpoint = '/api/thoughts'
const router = require('express').Router();

const {
    getThoughts,
    createThought,
    getSingleThought,
    deleteThought,
    updateThought,
    createReaction,
  } = require('../../controllers/thought-controller');

// POST AND GET and all Thoughts
//'/api/thoughts'
router.route('/').get(getThoughts).post(createThought);

 // '/api/thoughts/:toughtId'
 router.route('/:toughtId').get(getSingleThought).delete(deleteThought).put(updateThought);

// '/api/thoughts/:toughtId/reactions'
router.route('/:toughtId/reactions').put(createReaction);

module.exports = router;