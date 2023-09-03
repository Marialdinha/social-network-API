// Endpoint = '/api/thoughts'
const router = require('express').Router();

const {
    getThoughts,
    createThought,
  } = require('../../controllers/thought-controller');

// POST AND GET and all Thoughts
router.route('/').get(getThoughts).post(createThought);

module.exports = router;