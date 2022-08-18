const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static('client/public'));
app.use(express.json());

// 브라우저 새로고침을 위한 처리 (다른 route가 존재하는 경우 맨 아래에 위치해야 한다)
// 브라우저 새로고침 시 서버는 index.html을 전달하고 클라이언트는 window.location.pathname를 참조해 다시 라우팅한다.
app.get('*', (req, res) => {
  // console.log('[dirname]:' + __dirname);
  console.log(path.join(__dirname, '../client/public/index.html'));
  res.sendFile(path.join(__dirname, '..', 'client/public/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on http:/localhost:${PORT}`);
});
