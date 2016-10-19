var path = require('path')
var express = require('express')
var parser = require('body-parser')

var app = express()
app.use(parser.json())

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8080")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.get('/stash', (req, res) => {
  res.send({title: 'Test post', body: '# Example body content'})
})

app.post('/stash', (req, res) => {
  console.dir(req.body)
  res.send(req, res)
})

app.listen(process.env.PORT || 5000, e => console.log('Running!'))
