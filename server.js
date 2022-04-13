require('dotenv/config');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 4567;
const log = (arg)=>console.log(arg);


app.listen(PORT, (req, res) => {
    log(`Server is listening on port: ${PORT}`);
})