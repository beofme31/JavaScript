const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// CORS 미들웨어 사용
app.use(cors());

app.get('/sum/:num', (req, res) => {
  const num = parseInt(req.params.num, 10);
  const result = num + 10;  // 간단한 연산 예시
  res.json({ result });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
