const express = require('express');
const { Configuration, OpenAIApi } = require("openai");
const app = express();
const cors = require('cors');
//const port = 3000;
var server_port = process.env.YOUR_PORT || process.env.PORT || 80;
var server_host = process.env.YOUR_HOST || '0.0.0.0';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require('dotenv').config();

app.use(cors({
  origin: '*'
}));

const configuration = new Configuration({
  apiKey: process.env.API_KEY,
});
const openai = new OpenAIApi(configuration);

async function runCompletion (query, tokens) {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: query,
    temperature:1,
    top_p:1,
    frequency_penalty:0,
    presence_penalty:0,
    max_tokens: tokens,    
  });
    return completion.data.choices[0].text;
  }

app.post('/chat', async function(req, res) {  
  const query = req.body;      
  let response = await runCompletion(query.req, query.tokens);
  res.json(
    {
        'message': response
    }
  )
});  

app.get('/', async function(req, res) {  
  res.send('Running OK!');
});

app.listen(server_port, server_host, function() {
  console.log(`App listening at http://localhost:${server_port}`);
});
