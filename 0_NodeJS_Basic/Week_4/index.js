const express = require('express');
const app = express();

const port = 5000
const route = require('./routes/index')
app.use(express.json());

// Routes init
route(app)

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
