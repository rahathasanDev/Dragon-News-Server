const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors')
const news = require('./Data/news.json')

const categories = require('./Data/Categories.json');
app.use(cors());
app.use(express.json());

app.get('/categories', (req, res) => {
  res.send(categories);
})


// here 3 types of filtering 
/*
1.all news 
2.by id 
3.by categories */

app.get('/news', (req, res) => {
  res.send(news);
})
app.get('/news/:id', (req, res) => {
  const id = req.params.id;
  console.log(id);
  const selectedNews = news.find(n => n._id === id);
  res.send(selectedNews)
})

app.get('/categories/:id', (req, res) => {
  const id =parseInt(req.params.id);
  if (id == 0) {
    res.send(news)
  }
  else {
    const categoryNews = news.filter(n => parseInt(n.category_id) === id);
    res.send(categoryNews)
  }

})
app.get('/', (req, res) => {
  res.send('dragon is runnig')
});

app.listen(port, () => {
  console.log(`Dragon Api Is runnig on port:${port}`);
})
