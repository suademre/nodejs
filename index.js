console.log('Hello World!')

const http = require('http')

const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end('<h1>Hellooo</h1>')
})

server.listen(port, () => {
  console.log(`es funktioniert im port ${port}`)
})
