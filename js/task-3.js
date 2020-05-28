/* eslint-disable no-shadow */
// eslint-disable-next-line import/extensions
import users from './users.js';

const getUsersWithGender = (users, gender) => {
  const usersWithGender = users
    .filter(user => user.gender === gender)
    .map(user => user.name);

  return usersWithGender;
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
