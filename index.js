const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(8000, function () {
  console.log('Listening on port 8000')
})

require('../config/middleware.js')(app, express);
require('../config/routes.js')(app, express);