const users = [
  {
    userId: 1,
    email: 'test@test123.com',
    password: '123456',
    name: 'blah',
    nickname: 'blahblah',
    profilePic: '/assets/images/users/1/thumbnail.png',
  },
  {
    userId: 2,
    email: 'aaa',
    password: '123',
    name: 'wo',
    nickname: 'wowo',
    profilePic: '',
  },
  {
    userId: 3,
    email: 'naver@naver.com',
    password: '123123',
    name: '하준박',
    nickname: 'Benja',
    profilePic: '',
  },
  {
    userId: 4,
    email: 'cwo1401@gmail.com',
    password: '123123',
    name: '최원오',
    nickname: '오원최',
    profilePic: 'https://cdn.golfissue.com/news/photo/202010/10124_10271_657.jpg',
  },
  {
    userId: 5,
    email: 'abc@abc.com',
    password: '123123',
    username: '송송파',
    nickname: '송송파',
    profilePic: '',
  },
];

const findUser = email => users.find(user => user.email === email);
const validateSignin = (email, password) => users.find(user => user.email === email && user.password === password);

const setUsers = newUser => {
  users.push(newUser);
};

const generateUserId = () => Math.max(...users.map(user => user.userId), 0) + 1;

module.exports = { users, findUser, validateSignin, setUsers, generateUserId };
