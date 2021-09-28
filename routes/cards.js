const express = require('express')

const router = express.Router()

let cards = [
  {
    text: 'What is MongoDB?',
    author: 'John Doe',
    id: '12',
  },
  {
    text: 'What is Node.js?',
    author: 'Jane Doe',
    id: '123',
  },
]

router.get('/', (req, res) => {
  res.status(200).json(cards)
})

router.get('/:id', (req, res) => {
  // let getId
  // cards.find(c => (c.id === req.params.id ? (getId = c) : (getId = null)))
  // res.status(200).json(getId)
  const { id } = req.params
  const card = cards.find(card => card.id === id)
  res.status(200).json(card)
})

router.post('/:id', (req, res) => {
  console.log(req.body)

  res.send('GEPOSTET')
})

router.put('/:id', (req, res) => {
  const params = req.params
  console.log(params)
  res.send('PUTT')
})

router.patch('/:id', (req, res) => {
  console.log(req.body)
  res.send('PATCHH')
})

router.delete('/:id', (req, res) => {
  console.log(req.body)
  res.send('GELÖSCHT')
})

module.exports = router
