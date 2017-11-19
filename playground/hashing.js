const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

let password = 'aaron1994';

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   });
// });

let hashedPass = '$2a$10$uZ6V4ITLbFt3dpYTiTrtZO0aEt5Y0T9gIcxsvCs3x0r/FOOV1RmrK';

bcrypt.compare(password, hashedPass, (err, res) => {
  console.log(res);
});

// let data = {
//   id: 8
// };
//
// let token = jwt.sign(data, 'swolepaps');
// console.log(token);
//
// let decoded = jwt.verify(token, 'swolepaps');
// console.log('decoded', decoded);

// let message = 'I am swolepapi';
// let hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);
//
// let data = {
//   id: 4
// };
//
// let token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };
//
// //ATTACK WHERE DATA IS UPDATED
// // token.data.id = 5;
// // token.hash = JSON.stringify(token.data).toString();
//
// let resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
//
// console.log(resultHash === token.hash ? 'Data not changed' : 'Data was changed. Do not trust!');
