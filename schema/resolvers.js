const  Userlist  = require('../FakeData')

const resolvers = {
 // this model is output data and get data
    Query : {
        users : ()=>{
             return Userlist
        }
    }
}

module.exports = resolvers