import { getAllComics, getComicById, createComic, updateComic, deleteComic } from '../repository/comic.repository.js';

/**
 * Get all comics with pagination, filtering, and sorting options
 */
export const getComics = async (req, res) => {
  try {
    const { page = 1, limit = 10, sort = 'title', ...filters } = req.query;
    const comics = await getAllComics(filters, page, limit, sort);
    res.json(comics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Get a single comic by ID
 */
export const getComic = async (req, res) => {
  try {
    const comic = await getComicById(req.params.id);
    if (comic) {
      res.json(comic);
    } else {
      res.status(404).json({ message: 'Comic not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Add a new comic to the inventory
 */
export const addComic = async (req, res) => {
  try {
    const newComic = await createComic(req.body);
    res.status(201).json(newComic);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * Edit an existing comic by ID
 */
export const editComic = async (req, res) => {
  try {
    const updatedComic = await updateComic(req.params.id, req.body);
    if (updatedComic) {
      res.json(updatedComic);
    } else {
      res.status(404).json({ message: 'Comic not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * Delete a comic by ID
 */
export const removeComic = async (req, res) => {
  try {
    const deletedComic = await deleteComic(req.params.id);
    if (deletedComic) {
      res.json({ message: 'Comic deleted' });
    } else {
      res.status(404).json({ message: 'Comic not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};