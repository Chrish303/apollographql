const { Userlist, Movielist } = require('../FakeData');
const _  = require('lodash')

const resolvers = {
 // this model is output data and get data
    Query : {
// QUERY RESOLVERS
        users : ()=>{
             return Userlist
        },
        user :(parent,args)=>{
           const id = args.id
           const user = _.find(Userlist,{id})
           return user
        },
//MOVEIS RESOLVER
        moveis : ()=>{
            return Movielist 
        },
        movie : (parent,args) => {
             const name=args.name
             const movie = _.find(Movielist,{name})
             return movie
        },
        users:{
        favourite: ()=>{
            return _.filter
            (Movielist,
                (moveis)=>
                    moveis.yearofpublication>=2010 && moveis.yearofpublication<=2024)
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
}
}

module.exports = resolvers;