/* eslint-disable no-shadow */
// eslint-disable-next-line import/extensions
import users from './users.js';

const getSortedUniqueSkills = users => {
  const sortedSkills = users
    .reduce((allSkills, user) => {
      allSkills.push(...user.skills);

      return allSkills;
    }, [])

    .filter((skill, index, skills) => {
      return index === skills.indexOf(skill);
    })

    .sort();

  return sortedSkills;
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
