/* eslint-disable no-shadow */
// eslint-disable-next-line import/extensions
import users from './users.js';

const getNamesSortedByFriendsCount = users => {
  const sortedFriends = [...users]
    .sort(function(prevUser, nextUser) {
      return prevUser.friends.length - nextUser.friends.length;
    })
    .map(user => user.name);
  return sortedFriends;
};

console.table(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
