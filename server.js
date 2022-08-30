const express = require('express');
const path = require('path');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const users = require('./fake-data/user');
const tripSchedules = require('./fake-data/tripSchedules');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8089;

const auth = (req, res, next) => {
  const accessToken = req.headers.authorization || req.cookies.accessToken;
  console.log('auth');
  try {
    jwt.verify(accessToken, process.env.SECRET_KEY);

    if (req.url === '/signin' || req.url === '/signup' || req.url === '/intro') {
      return res.redirect('/main');
    }

    next();
  } catch (e) {
    if (req.url === '/trip-planner-edit') {
      return res.redirect('/signin');
    }

    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  }
};

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.post('/tripSchedule', (req, res) => {
  try {
    console.log('[POST] /tripSchedule');
    const tripSchedule = req.body;
    // console.log(tripSchedule);
    const newTripSchedule = tripSchedules.setTripSchdule(tripSchedule);
    // console.log(tripSchedule.tripSchedules);
    res.send(newTripSchedule);
  } catch (e) {
    console.error(e);
  }
});

app.post('/userInfo', (req, res) => {
  try {
    const accessToken = req.headers.authorization || req.cookies.accessToken;
    const decode = jwt.verify(accessToken, process.env.SECRET_KEY);
    const { email } = decode;
    const userInfo = users.findUser(email);
    const { userId, name, nickname, profilePic } = userInfo;
    res.send({ userId, email, name, nickname, profilePic });
  } catch (e) {
    res.status(401).send({});
  }
});

app.post('/logout', (req, res) => {
  try {
    res.clearCookie('accessToken');
    res.redirect('/main');
  } catch (e) {
    console.error(e);
  }
});

app.get('/mainTripSchedules', (req, res) => {
  try {
    console.log(req.query);
    const query = req.query.hasOwnProperty('category');
    console.log(query);
    if (!query) {
      const responseSchedules = tripSchedules.mainTripSchedules();
      res.send(responseSchedules);
    } else {
      const { category, value } = req.query;
      const responseSchedules = tripSchedules.filterMainTripSchedules(category, value);
      res.send(responseSchedules);
    }
  } catch (e) {
    console.error(e);
  }
});

// app.get('/mainTripSchedules', (req, res) => {
//   console.log('[GET] mainTripSchedules/params');
//   try {
//     // console.log(req.query);
//     const { category, value } = req.query;
//     const responseSchedules = tripSchedules.filterMainTripSchedules(category, value);
//     res.send(responseSchedules);
//   } catch (e) {
//     console.error(e);
//   }
// });

app.get('/tripSchedule/:tripScheduleId', (req, res) => {
  try {
    const { tripScheduleId } = req.params;
    console.log('[server] /tripSchedule/' + tripScheduleId);
    const responseSchedule = tripSchedules.findTripSchedule(tripScheduleId);
    console.log(responseSchedule);
    res.send(responseSchedule);
  } catch (e) {
    console.error(e);
  }
});

app.get('*', auth, (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/auth/signin', (req, res) => {
  const { email, password } = req.body;

  const userInfo = users.validateSignin(email, password);
  if (userInfo) {
    const { userId, email, name, nickname, profilePic } = userInfo;
    const accessToken = jwt.sign({ email }, process.env.SECRET_KEY, { expiresIn: '1d' });

    res.cookie('accessToken', accessToken, {
      maxAge: 1000 * 60 * 60 * 24,
      httpOnly: true,
    });
    res.send({ userId, email, name, nickname, profilePic });
  } else {
    res.status(401).send({
      error: `아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다.<br />입력하신 내용을 다시 확인해주세요.`,
    });
  }
});

app.post('/auth/signup', (req, res) => {
  const { email, nickname, username, password } = req.body;
  // 중복 id check
  const userInfo = users.findUser(email);

  if (!userInfo) {
    // id 생성
    console.log(userInfo);
    const newUserId = users.generateUserId();

    users.setUsers({ userId: newUserId, email, nickname, username, password });

    const accessToken = jwt.sign({ email }, process.env.SECRET_KEY, { expiresIn: '1d' });

    res.cookie('accessToken', accessToken, {
      maxAge: 1000 * 60 * 60 * 24,
      httpOnly: true,
    });

    res.send({ userId: newUserId, email, username, nickname });
  } else {
    res.status(401).send({ error: '이미 등록된 이메일 입니다.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on http:/localhost:${PORT}`);
});
