const express = require('express');
const dotenv = require('dotenv');
const qrCode = require('qrcode');
const app = express();
const env = dotenv.config();
const port = process.env.PORT || 3000;
const endpoint = process.env.ENDPOINT || '/qr';

app.get('/', (req, res) => res.send('Server is running!'));

app.get(endpoint, (req, res) => {
    const qrData = req.query.content || 'Example';
    qrCode.toDataURL(qrData, (err, src) => {
        if (err) res.send("Error occured");
        res.send(`<img src=${src} alt="QR Code">`);
    });
});

app.listen(port, () => console.log(`Server is running at port ${port}`));