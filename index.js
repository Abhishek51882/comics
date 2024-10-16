import express from 'express';
import cors from 'cors';
import { connectUsingMongoose } from './src/config/mongooseConfig.js';
import comicRoutes from './src/routes/comic.routes.js';
import { loggerMiddleware } from './src/middlewares/logger.middleware.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(loggerMiddleware);

app.use('/api/comics', comicRoutes);

app.listen(port, async () => {
  await connectUsingMongoose();
  console.log(`Server is running on port ${port}`);
});