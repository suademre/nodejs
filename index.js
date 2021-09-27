/* console.log('Hello World!')

const http = require('http')

const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end('<h1>Hellooo</h1>')
})

server.listen(port, () => {
  console.log(`es funktioniert im port ${port}`)
})
 */

const express = require('express')
const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/html; charset=utf-8')
  res.send('<h1>Hello World! Wie Läuft</h1>')
  /* res.send('<h1>Hello World!</h1>') */
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
