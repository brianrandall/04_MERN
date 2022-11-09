const mongoose = require("mongoose");

const DATABASE = 'team_db';

mongoose.connect(`mongodb://localhost/${DATABASE}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log(`Established a connection ${DATABASE}`))
    .catch(err => console.log(`Something went wrong when connecting to ${DATABASE}`, err));





// {
//     'game': 1,
//     'teamInfo': [
//         {
//         name: 'brian'
//         positon: 'couch potato'
//         status: 'undecided' //(but this will change)
//         }
//         {
//         name: 'larry'
//         positon: 'laundry man'
//         status: 'undecided' //(but this will change)
//         }
//     ]
//     'game': 2,
//     'teamInfo': [

//     ] 

// } 

// {
//     'name': brian, 
//     'position': position,
//     'game_num': {
//         1: {
//             status: 'undecided'
//         }
//     }
// }

// {
//     'name': brian, 
//     'position': position,
//     'game_num': {
//         2: {
//             status: 'undecided'
//         }
//     }
// }

// {
//     'name': brian, 
//     'position': position,
//     'game_num': {
//         3: {
//             status: 'undecided'
//         }
//     }
// }

// {
//     _id: '2l3k4jhtl2k3jh32l'
//     name: 'brian'
//     position: 'sandwich eater'
//     status: [
//         {
//             game: 1,
//             playerStatus: 'undecided'
//         },
//         {
//             game: 2, 
//             playerStatus: 'playing'
//         }
//     ]
// }