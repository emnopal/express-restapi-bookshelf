import express from 'express';

import {
    addBookHandler,
    getBookHandler,
    editBookHandler,
    deleteBookHandler,
} from '../controllers/bookController.js';

import {appName} from '../configs/environment.js';

const router = express.Router();

router.get(`/${appName}/:id?`, getBookHandler);
router.post(`/${appName}`, addBookHandler);
router.put(`/${appName}/:id`, editBookHandler);
router.delete(`/${appName}/:id`, deleteBookHandler);

export default router;
