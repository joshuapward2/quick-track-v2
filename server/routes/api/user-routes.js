const router = require('express').Router();

const {
    getUser,
    getUserId,
    createUser,
    updateUser,
    removeUser
} = require('../../controllers/user-controller')

router
    .route('/')
    .get(getUser)
    .post(createUser);

router.route('/:userId')
    .get(getUserId)
    .put(updateUser)
    .delete(removeUser);

module.exports = router;