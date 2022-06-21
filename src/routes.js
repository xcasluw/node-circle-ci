const route = require('express').Router()

route.get('/', (req, res) => {
  return res.json({ msg: 'APP IS OK' })
})

module.exports = route
