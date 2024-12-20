const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('dist'));

app.listen(PORT, () => {
  console.info(`server started on port ${PORT}`);
});

app.get('/version', (req, res) => {
  res.send('1.0.0');
});

app.get('/health', (req, res) => {
  res.send('ok');
});