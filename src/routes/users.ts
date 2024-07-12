import { createUserController } from '../controllers/users/createUser';
import { getUserController } from '../controllers/users/getUser';
import { getUsersController } from '../controllers/users/getUsers';

const express = require('express');
const router = express.Router();

console.log('Users route');

router.get('/:id', getUserController);
router.get('/', getUsersController);
router.post('/', createUserController);

module.exports = router;
