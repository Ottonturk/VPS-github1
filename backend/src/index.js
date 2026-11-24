import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'backend', timestamp: new Date().toISOString() });
});

app.get('/api/v1/info', (req, res) => {
  res.json({ message: 'API ready for Web and Telegram clients' });
});

app.listen(PORT, '0.0.0.0', () => console.log(`Backend running on ${PORT}`));
