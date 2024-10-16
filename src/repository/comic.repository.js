import Comic from '../schema/comic.schema.js';

/**
 * Get all comics with pagination, filtering, and sorting options
 */
export const getAllComics = async (filters = {}, page = 1, limit = 10, sort = 'title') => {
    const skip = (page - 1) * limit;
    return await Comic.find(filters).sort(sort).skip(skip).limit(limit);
  };

/**
 * Get a single comic by ID
 */
export const getComicById = async (id) => {
  return await Comic.findById(id);
};

/**
 * Create a new comic
 */
export const createComic = async (comicData) => {
  const comic = new Comic(comicData);
  return await comic.save();
};

/**
 * Update an existing comic by ID
 */
export const updateComic = async (id, comicData) => {
  return await Comic.findByIdAndUpdate(id, comicData, { new: true });
};

/**
 * Delete a comic by ID
 */
export const deleteComic = async (id) => {
  return await Comic.findByIdAndDelete(id);
};