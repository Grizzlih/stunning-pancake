const express = require('express');
const path = require('path');
const app = express();

const port = 3000;

app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('Hello world, Mila');
});

app.listen(port, () => {
    console.log(`Example app listening at port http://localhost:${port}`);
});
