const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Backend is running!");
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log("Server started at Port:", PORT);
});