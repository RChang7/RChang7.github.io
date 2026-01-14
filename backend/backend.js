import express from 'express';
const app = express();
const port = 5000;



app.get('/repos', (req, res) => {
    fetch("https://api.github.com/users/RChang7/repos")
        .then(res => res.json())
            .then(data => {res.json(data)})
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});