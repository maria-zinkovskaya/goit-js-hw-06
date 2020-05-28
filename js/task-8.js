/* eslint-disable no-shadow */
// eslint-disable-next-line import/extensions
import users from './users.js';

const getUsersWithFriend = (users, friendName) => {
  const userWithFriend = users.reduce((name, user) => {
    if (user.friends.includes(friendName)) {
      name.push(user.name);
    }
    return name;
  }, []);
  return userWithFriend;
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
