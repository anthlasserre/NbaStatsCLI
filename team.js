const request = require('request');
const pictureTube = require('picture-tube')

const chooseTeam = {
    "sas" : "San Antonio Spurs",
    "atl" : "Atlanta Hawks",
}

// Get Player Stats from JSON
module.exports.teamData = function (data) {
    const jsonObject = JSON.parse(data);
    const countPlayers = jsonObject.length;
    console.log('------------------')
    console.log('Players: ' + countPlayers)
    for(i = 0; i < countPlayers; i++)
    console.log('-> ' + jsonObject[i].name)
}

// Get Team Logo from URL
// module.exports.teamLogo = function (teamname) {
//     // Display Player Picture
//     const tube = pictureTube();
//     tube.pipe(process.stdout);
//     request(`https://nba-players.herokuapp.com/players/${lastname}/${firstname}`).pipe(tube);
// }

// Array chooseTeam = {
//     "gsw",
//     "lac",
//     "lal",
//     "pho",
//     "sac",
//     "dal",
//     "hou",
//     "mem",
//     "nor",
//     "sas" : "San Antonio Spurs",
//     "den",
//     "min",
//     "okc",
//     "por",
//     "uth",
//     "bos",
//     "bro",
//     "nyk",
//     "phi",
//     "tor",
//     "chi",
//     "cle",
//     "det",
//     "ind",
//     "mil",
//     "atl" : "Atlanta Hawks",
//     "cha",
//     "mia",
//     "orl",
//     "was",
// }