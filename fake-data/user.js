let users = [
  { userId: 1, email: 'testtest@test123.com', password: '123456', name: 'blah', nickname: 'blahblah' },
  { userId: 2, email: 'aaa', password: '123', name: 'wo', nickname: 'wowo' },
];

const findUser = email => users.find(user => user.email === email);
const validateLogin = (email, password) => users.find(user => user.email === email && user.password === password);

const setUsers = newUser => {
  users = [...users, newUser];
  console.log(users);
};

const generateUserId = () => Math.max(...users.map(user => user.userId), 0) + 1;

module.exports = { findUser, validateLogin, setUsers, generateUserId };
