import express from 'express';
const app = express();
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

app.use(express.json());

app.get('/', (req, res) => {
  return res.sendFile(path.resolve(__dirname, '/../client/public/index.html'));
});

export default app;
