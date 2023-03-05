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

// 데이터 리스트 조회
app.get('/wise-sayings', async(req, res) => {
     const [rows] = await pool.query("SELECT * FROM wise_saying ORDER BY id DESC");
    // SELECT * FROM wise_saying ORDER BY id DESC 라는 쿼리를 실행하겠다.
     res.json(rows);
    // 담겨진 rows를 json으로 받겠다.
});

// 데이터 1개만 가져오는 단건 조회.
// 주소창에 localhost:3000/wise_sayings/id를 넣으면 해당 id 데이터가 조회된다.
app.get('/wise-sayings/:id', async(req, res) => {
  const {id} = req.params;
  const [rows] = await pool.query("SELECT * FROM wise_saying WHERE id = ?", [
    id,
  ]);

  // 만약 없는 데이터 id를 조회했을 경우 오류 메세지 뜨도록.
  if (rows.length == 0) {
    res.status(404).send("not found");
    return;
  }

  res.json(rows[0]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});