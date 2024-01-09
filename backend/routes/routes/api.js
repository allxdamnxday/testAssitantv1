const express = require('express');
const axios = require('axios');
const router = express.Router();

// Middleware to check for OpenAI API key
const openAiApiKeyMiddleware = (req, res, next) => {
  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({ message: 'OpenAI API key not configured.' });
  }
  next();
};

// Route to handle OpenAI API interactions
router.post('/openai', openAiApiKeyMiddleware, async (req, res) => {
  try {
    const { prompt } = req.body;
    const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
      prompt: prompt,
      max_tokens: 150
    }, {
      headers: { 'Authorization': `Bearer ${process.env.OPENAI_API_KEY}` }
    });

    res.json(response.data);
  } catch (error) {
    res.status(error.response.status).json({ message: error.message });
  }
});

module.exports = router;
