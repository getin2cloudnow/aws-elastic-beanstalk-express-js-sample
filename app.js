const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello class, today we will learn more about heatlhchecks or not?'));
app.listen(port);
console.log(`App running on http://localhost:${port}`);
