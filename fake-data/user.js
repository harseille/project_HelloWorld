let users = [
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
];

const findUser = email => users.find(user => user.email === email);
const validateSignin = (email, password) => users.find(user => user.email === email && user.password === password);

const setUsers = newUser => {
  users = [...users, newUser];
  console.log('[setUsers]' + users);
};

const generateUserId = () => Math.max(...users.map(user => user.userId), 0) + 1;

module.exports = { findUser, validateSignin, setUsers, generateUserId };
