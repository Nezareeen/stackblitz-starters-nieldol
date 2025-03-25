const express = require('express');
const mongoose = require('mongoose');
const env = require('dotenv').config();
const schema = require('./schema');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.static('static'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, async() => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get('/menu', async(req,res)=>{
  const dishes = await schema.find();
  res.json(dishes);
});

app.post('/menu', async(req,res)=>{
  const dish = new schema(req.body);
  await dish.save();
  res.json(dish);
});