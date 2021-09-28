const express = require('express')
const { nanoid } = require('nanoid')

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
  if (card) {
    res.status(200).json(card)
  } else {
    const error = { message: 'Could not find object with that id.' }
    res.status(404).json(error)
  }
})

router.post('/', (req, res) => {
  const { text, author } = req.body // { text: "What is node?", author: "Max M." }

  if (text === '' || author === '') {
    const error = { message: 'Information missing.' }
    return res.status(404).json(error) // Bad Request
  }

  const newCard = { text, author, id: nanoid() } // { text: text, author: author, id: nanoid() }
  cards = [...cards, newCard]
  //cards.push(newCard)
  res.status(200).json(newCard)
})

// router.put('/:id', (req, res) => {
//   const { id } = req.params
//   const card = cards.find(card => card.id === id)
//   card.text = text
//   card.author = author
//   cards = [...cards, card]
// })

router.patch('/:id', (req, res) => {
  const { id } = req.params
  const { text, author } = req.body

  if (!text && !author) {
    const error = { message: 'Information missing' }
    return res.status(404).json(error)
  }

  const card = cards.find(card => card.id === id)

  if (!card) {
    const error = { message: 'Could not find object with that id.' }
    return res.status(404).json(error)
  }

  const newCard = {
    text: text ? text : card.text,
    author: author ? author : card.author,
    id: card.id,
  }

  const index = cards.findIndex(card => card.id === id) // gives index of card

  cards = [...cards.slice(0, index), newCard, ...cards.slice(index + 1)]

  // const firstHalfOfArray = cards.slice(0, index)
  // const lastHalfofArray = cards.slice(index + 1)

  // cards = [...firstHalfOfArray, newCard, ...lastHalfofArray]
  response.status(200).json(newCard)
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  const card = cards.find(card => card.id === id)

  if (card) {
    cards.filter(card => card.id !== id)
    res.status(200).json(card)
  } else {
    const error = { message: 'Could not find object with that id.' }
    res.status(404).json(error)
  }
})

module.exports = router
