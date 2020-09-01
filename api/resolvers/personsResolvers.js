const personsData = require('../data/persons');

const personsResolvers = {
  Query: {
    allPeople: () => personsData,
    person: (root, { id }) => personsData.find((person) => person.id === id),
  },
};

module.exports = personsResolvers;
