import express from "express";
import mysql from "mysql2/promise";

// DB 설정
const pool = mysql.createPool({
  host: "localhost",
  user: "korad",
  password: "kor123414",
  database: "wise_saying",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

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

app.get('/wise-sayings', async(req, res) => {
     const [rows] = await pool.query("SELECT * FROM wise_saying ORDER BY id DESC");
    // SELECT * FROM wise_saying ORDER BY DESC 라는 쿼리를 실행하겠다.
     res.json(rows);
    // 담겨진 rows를 json으로 받겠다.
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});