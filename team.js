#!/usr/bin/env node

const { playerData, playerPicture } = require('./player');
const { getPlayerStat } = require('./getJson');
const request = require('request');
const pictureTube = require('picture-tube')
const inquirer = require('inquirer')

const chooseTeam = {
    "sas" : "San Antonio Spurs",
    "atl" : "Atlanta Hawks",
}
var playersTeam = [];

// Get Player Stats from JSON
module.exports.teamData = function (data) {
    const jsonObject = JSON.parse(data);
    const countPlayers = jsonObject.length;
    console.log('------------------')
    console.log('Players: ' + countPlayers)

    for(i = 0; i < countPlayers; i++) {
    playersTeam.push(jsonObject[i].name)
    }

    // console.log(playersTeam)

inquirer.prompt([
    {
        type: 'list',
        message: 'Which players you want to know',
        name: 'choicePlayer',
        choices: playersTeam
    },
]).then((answers) => {
    // console.log(answers.choicePlayer[0])
    if(answers){
        console.log("This is " + answers.choicePlayer + " stats!")
        const fullname = answers.choicePlayer
        // console.log('You are searching: ', fullname)
        var indexSpace = fullname.indexOf(' ') ;
        const firstname = fullname.substring(0, indexSpace);
        const lastname = fullname.substring(indexSpace + 1);
        // console.log(firstname + " " + lastname)
        getPlayerStat(lastname, firstname).then((data) => {
            playerData(data)
            playerPicture(firstname, lastname)
        }).catch((err) => {
            console.log("Error:", err)
        })
    }
})

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