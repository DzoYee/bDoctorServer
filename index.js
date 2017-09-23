const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(8080, function () {
  console.log('Listening on port 8080')
})

require('../config/routes.js')(app, express);
require('../config/middleware.js')(app, express);