const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const rootRoutes = require('./routes');
const bodyParser = require('body-parser');


app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(rootRoutes);

app.listen(PORT, () => {
    console.log('Example app listening on port 3000!' + PORT);
});