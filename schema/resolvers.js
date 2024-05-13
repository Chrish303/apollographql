const { Userlist, Movielist } = require('../FakeData');
const _ = require('lodash');

const resolvers = {
    Query: {
        users: () => {
            return Userlist;
        },
        user: (parent, args) => {
            const id = args.id;
            const user = _.find(Userlist, { id });
            return user;
        },
        moveis: () => {
            return Movielist;
        },
        movie: (parent, args) => {
            const name = args.name;
            const movie = _.find(Movielist, { name });
            return movie;
        },
        users: {
            favourite: () => {
                return _.filter(
                    Movielist,
                    (movie) => movie.yearofpublication >= 2010 && movie.yearofpublication <= 2024
                );
            },
        },
    },
    Mutation: {
        createUser: (parent, args) => {
            const user = args.input;
            const lastId = Userlist[Userlist.length - 1].id;
            user.id = lastId + 1;
            Userlist.push(user);
            return user;
        },
        updateUsername: (parent, args) => {
            const { id, newUsername } = args.input;
            let userUpdated;
            Userlist.forEach((user) => {
              if (user.id === Number(id)) {
                user.username = newUsername;
                userUpdated = user;
              }
            });
             return userUpdated;
        },
        deleteUser: (parent, args) => {
            const id = args.id;
            _.remove(Userlist, (user) => user.id === Number(id));
            return  { success: true };
        },
    },
};

module.exports = resolvers;
