import express from 'express';
import connectDB from './db';
import routes from './routes';

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to DB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api', routes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
