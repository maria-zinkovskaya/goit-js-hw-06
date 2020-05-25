/* eslint-disable no-shadow */
// eslint-disable-next-line import/extensions
import users from './users.js';

const getInactiveUsers = users => {
  const activeUsers = users.filter(function(user) {
    return !user.isActive;
  });
  return activeUsers.map(function(user) {
    return user.name;
  });
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
