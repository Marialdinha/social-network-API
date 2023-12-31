// Endpoint = '/api/users'
const router = require('express').Router();

const {
    getUsers,
    createUser,
    getSingleUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,
  } = require('../../controllers/user-controller');

  // '/api/users'
  router.route('/').get(getUsers).post(createUser);

  // '/api/users/:userId'
  router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

   // '/api/users/:userId/friends/:friendId
   router.route('/:userId/friends/:friendId').put(addFriend).delete(deleteFriend);


module.exports = router;