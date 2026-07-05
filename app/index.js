const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from Cloud-Native DevOps Deployment Platform!');
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP', message: 'Application is running healthily' });
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
