import express from 'express';
import cors from "cors";

const app = express();
const port = 3000;
const cors_option = {
    origin: ['https://ryanstchang.dev', 'http://localhost:3000'], 
    optionsSuccessStatus: 200
}


app.use(cors(cors_option));

app.get('/repos', (req, res) => {
    fetch("https://api.github.com/users/RChang7/repos")
        .then(res => res.json())
            .then(data => {res.json(data)})
});

app.get('/repos/:name', (req, res) => {
    const { name } = req.params;
    fetch('https://api.github.com/repos/RChang7/' + name)
        .then(res => res.json())
            .then(data => {res.json(data)})
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});