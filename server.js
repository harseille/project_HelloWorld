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
    next();
  } catch (e) {
    return res.redirect('/login');
  }
};

app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

// auth 필요할 때
// app.get('/main', auth, (req, res) => {
//   console.log('main');
// });
app.get('/intro', auth, (req, res) => {
  res.redirect('/main');
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/auth/login', (req, res) => {
  const { email, password } = req.body;

  const userInfo = users.findUser(email, password);

  if (userInfo) {
    const { email, name, nickname } = userInfo;
    const accessToken = jwt.sign({ email }, process.env.SECRET_KEY, { expiresIn: '1d' });

    res.cookie('accessToken', accessToken, {
      maxAge: 1000 * 60 * 60 * 24,
      httpOnly: true,
    });
    res.send({ email, name, nickname });
  } else {
    res.status(401).send({ error: '등록되지 않은 사람입니다.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on http:/localhost:${PORT}`);
});
