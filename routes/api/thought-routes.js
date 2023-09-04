// Endpoint = '/api/thoughts'
const router = require('express').Router();

const {
    getThoughts,
    createThought,
    getSingleThought,
    deleteThought,
    updateThought,
    createReaction,
    deleteReaction,
  } = require('../../controllers/thought-controller');

//'/api/thoughts'
router.route('/').get(getThoughts).post(createThought);

// '/api/thoughts/:toughtId'
 router.route('/:toughtId').get(getSingleThought).delete(deleteThought).put(updateThought);

// '/api/thoughts/:toughtId/reactions'
router.route('/:toughtId/reactions').put(createReaction);

// '/api/thoughts/:toughtId/reactions/:reactionId'
router.route('/:toughtId/reactions/:reactionId').put(deleteReaction);


module.exports = router;