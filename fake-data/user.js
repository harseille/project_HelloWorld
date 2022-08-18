const users = [
  { email: 'testtest@test123.com', password: '123456', name: 'blah', nickname: 'blahblah' },
  { email: 'aaa', password: '123', name: 'wo', nickname: 'wowo' },
];

const findUser = (email, password) => users.find(user => user.email === email && user.password === password);
module.exports = { findUser };
