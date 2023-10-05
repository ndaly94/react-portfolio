const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8099;

app.use(express.static(path.join(__dirname, 'frontend', 'build')));

app.get("*", async (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
});

app.listen(PORT, () => console.log("Server be goin on" + PORT));