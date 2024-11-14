import express from 'express';

const app = express();
const PORT = process.env.PORT || 3001;  // Port for Render to use

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
