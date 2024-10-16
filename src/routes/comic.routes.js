import express from 'express';
import { getComics, getComic, addComic, editComic, removeComic } from '../controller/comic.controller.js';

const router = express.Router();

/**
 * @route GET /comics
 * @desc Get all comics with pagination, filtering, and sorting options
 */
router.get('/', getComics);

/**
 * @route GET /comics/:id
 * @desc Get a single comic by ID
 */
router.get('/:id', getComic);

/**
 * @route POST /comics
 * @desc Add a new comic to the inventory
 */
router.post('/', addComic);

/**
 * @route PUT /comics/:id
 * @desc Edit an existing comic by ID
 */
router.put('/:id', editComic);

/**
 * @route DELETE /comics/:id
 * @desc Delete a comic by ID
 */
router.delete('/:id', removeComic);

export default router;