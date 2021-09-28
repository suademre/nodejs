const express = require('express')
const app = express()

const port = 3000

app.use(express.json())

app.use('/api/cards', require('./routes/cards'))

// app.get('/api/cards', (req, res) => {
//   res.set('Content-Type', 'text/html; charset=utf-8')
//   res.send('<h1>Hello World! Wie Läuft</h1>')
//   /* res.send('<h1>Hello World!</h1>') */
// })

// app.post('/api/cards', (req, res) => {
//   console.log(req.body)
//   const { text } = request.body
//   res.send(text)
// })

// app.put('/api/cards', (req, res) => {
//   res.send('This is the put request')
// })

// app.patch('/api/cards', (req, res) => {
//   res.send('This is the patch request')
// })

// app.delete('/api/cards', (req, res) => {
//   res.send('This is the delete request')
// })

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
