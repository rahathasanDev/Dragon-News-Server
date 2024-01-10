const express = require('express')
const app = express()
const port =process.env.PORT || 5000;
const cors = require('cors')

const categories = require('./Data/Categories.json');
app.use(cors());

app.get('/categories',(req, res)=>{
  res.send(categories);
})

app.get('/', (req, res) => {
  res.send('dragon is runnig')
});

app.listen (port,()=>{
  console.log(`Dragon Api Is runnig on port:${port}`);
})
