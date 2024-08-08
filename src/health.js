const router = require('express').Router()

app.get('/health', (req, res) => {
  res.send('ok')
})

module.exports = router