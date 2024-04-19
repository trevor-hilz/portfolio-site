import express from 'express';
const app = express();
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

app.use(express.json());

// app.use(express.static(path.join(__dirname, '../client/src/')));

app.get('/', (req, res) => {
  return res.sendFile(path.resolve(__dirname, '../dist/bundle.js'));
});

app.get('/', (req, res) => {
  return res.sendFile(path.resolve(__dirname, '/../client/public/index.html'));
});

export default app;
