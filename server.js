const express = require('express');
const path = require('path');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const users = require('./fake-data/user');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8089;

const auth = (req, res, next) => {
  const accessToken = req.headers.authorization || req.cookies.accessToken;

  try {
    const decode = jwt.verify(accessToken, process.env.SECRET_KEY);
    if (req.url === '/login' || req.url === '/signup' || req.url === '/intro') {
      return res.redirect('/main');
    }

    next();
  } catch (e) {
    if (req.url === 'trip-planner') {
      return res.redirect('/login');
    }

    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  }
};

app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

// auth 필요할 때
// app.get('/main', auth, (req, res) => {
//   console.log('main');
// });
// TODO: refectoring 필요
// app.get('/login', auth, (req, res) => {
//   res.redirect('/main');
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });
// app.get('/signup', auth, (req, res) => {
//   res.redirect('/main');
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

app.get('*', auth, (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/auth/login', (req, res) => {
  const { email, password } = req.body;

  const userInfo = users.validateLogin(email, password);

  if (userInfo) {
    const { email, name, nickname } = userInfo;
    const accessToken = jwt.sign({ email }, process.env.SECRET_KEY, { expiresIn: '1d' });

    res.cookie('accessToken', accessToken, {
      maxAge: 1000 * 60 * 60 * 24,
      httpOnly: true,
    });
    res.send({ email, name, nickname });
  } else {
    res.status(401).send({ error: '아이디, 비밀번호를 확인해주세요.' });
  }
});

app.post('/auth/signup', (req, res) => {
  const { email, nickname, name, password } = req.body;

  // 중복 id check
  const userInfo = users.findUser(email);

  if (!userInfo) {
    // id 생성
    users.setUsers({ userId: users.generateUserId(), email, nickname, name, password });

    const accessToken = jwt.sign({ email }, process.env.SECRET_KEY, { expiresIn: '1d' });

    res.cookie('accessToken', accessToken, {
      maxAge: 1000 * 60 * 60 * 24,
      httpOnly: true,
    });

    res.send({ email, name, nickname });
  } else {
    res.status(401).send({ error: '이미 등록된 이메일 입니다.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on http:/localhost:${PORT}`);
});
