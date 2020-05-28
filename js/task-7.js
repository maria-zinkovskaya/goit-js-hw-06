/* eslint-disable no-shadow */
// eslint-disable-next-line import/extensions
import users from './users.js';

const calculateTotalBalance = users => {
  const totalBalance = users.reduce(
    (balance, user) => balance + user.balance,
    0,
  );
  return totalBalance;
};

console.log(calculateTotalBalance(users)); // 20916
