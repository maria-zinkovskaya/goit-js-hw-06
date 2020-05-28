/* eslint-disable no-shadow */
// eslint-disable-next-line import/extensions
import users from './users.js';

const getInactiveUsers = users => {
  const inactiveUsers = users.filter(user => !user.isActive);
  return inactiveUsers;
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
