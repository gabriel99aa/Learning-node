console.clear();
import express from 'express';

const PORT = 3000;
const expressApp = express();

expressApp.use(express.json());
expressApp.use(express.text());


expressApp.get("/mi-cuenta", (req, res) => {
    res.send("Tu cuenta personal");
})

expressApp.post("", (req, res) => {
    res.send("");
})


expressApp.listen(PORT, () => {
    console.log(`listen on ${PORT}`);
})