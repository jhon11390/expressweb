const express = require('express');
const app = express();
app.set('view engine', 'pug');
app.set('views', 'views');

app.get('/', (req, res) => {
    const web = req.headers
    res.send(web["user-agent"])
});

app.listen(3000, () => console.log('Listening on port 3000!'));