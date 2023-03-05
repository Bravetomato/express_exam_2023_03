import express from "express";

const app = express();
const port = 3000;

const wiseSayings = [
  {
    content : "I am Ironman.",
    author : "Tony Stark",
  },
  {
    content : "I can do this all day.",
    author : "Captain America",
  },
  {
    content : "I have nothing to prove to you.",
    author : "Captain Marvel",
  },
];

app.get('/wise-sayings', (req, res) => {
    res.json(wiseSayings);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});