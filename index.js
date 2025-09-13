const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.get('/', (_, res) => res.send('Bienvenue sur Azure App Service !'));
app.listen(port, () => console.log(`App running on ${port}`));