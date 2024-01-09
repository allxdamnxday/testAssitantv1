const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
  res.send('OpenAI Multi-Assistant Backend Running');
});

app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});
