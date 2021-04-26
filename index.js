const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 16200;

app.use('/en/balance/', express.static(path.join(__dirname, 'app')))
app.use('/en/sports/', express.static(path.join(__dirname, 'app')))

app
	.get('/*', (req, res) => res.sendFile(path.join(__dirname, 'app/index.html')))
	.listen(PORT, () => console.log(`Listening On Port : ${ PORT }`));