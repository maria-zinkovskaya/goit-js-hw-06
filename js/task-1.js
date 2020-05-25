/* eslint-disable no-shadow */
// eslint-disable-next-line import/extensions
import users from './users.js';

const getUserNames = users =>
  users.map(function(user) {
    return user.name;
  });

console.log(getUserNames(users));

/*
 *2 вариант
 */

/*
 *const getUserNames = users.map(user => user.name);
 *console.log(getUserNames);
 */
