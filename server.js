import express from 'express';
import cors from 'cors';  // Import the CORS package

const app = express();
const PORT = process.env.PORT || 3001;  // Port for Render to use

// Enable CORS for all domains (you can restrict it to certain domains later if needed)
app.use(cors());

app.get('/', (req, res) => {
  res.send("Hello from Express on Render!");
});

// Example API endpoint
app.get('/api/message', (req, res) => {
  res.json({ message: "This is a message from the Express server on Render." });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
