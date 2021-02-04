const express = require('express');
const OAuth = require('oauth');

const app = express();

const { readFile } = require('fs').promises;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async (request, response) => {
    response.send( await readFile('./public/views/index.html', 'utf8') );
});

app.listen(process.env.PORT || 3000, () => console.log(`App avaiable on http://localhost:3000`))
