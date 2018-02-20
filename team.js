#!/usr/bin/env node

const request = require('request');
const pictureTube = require('picture-tube')
const inquirer = require('inquirer')
const chalk = require('chalk')

const { playerData, playerPicture } = require('./player');
const { getPlayerStat } = require('./getJson');

var playersTeam = [];

module.exports.getTeamName = function (teamname) {
    console.log(chalk.bgRed(chooseTeam[teamname]))
}

// Get Player Stats from JSON
module.exports.teamData = function (data) {
    const jsonObject = JSON.parse(data);
    const countPlayers = jsonObject.length;
    if(countPlayers == 0) {
        console.log(chalk.bgRed("Please enter a team like this:"));
        console.log(chalk.bgGreen("nbastats -t sas") + " (for San Antonio Spurs)");
        console.log(chooseTeam)
        return;
    }
    console.log('We\'ve found ' + countPlayers + " players!")

    for(i = 0; i < countPlayers; i++) {
    playersTeam.push(jsonObject[i].name)
    }

    // console.log(playersTeam)

inquirer.prompt([
    {
        type: 'list',
        message: 'Choose a player to view his stats',
        name: 'choicePlayer',
        choices: playersTeam
    },
]).then((answers) => {
    if(answers){
        console.log("This is " + answers.choicePlayer + " stats!")
        const fullname = answers.choicePlayer
        var indexSpace = fullname.indexOf(' ') ;
        const firstname = fullname.substring(0, indexSpace);
        const lastname = fullname.substring(indexSpace + 1);
        getPlayerStat(lastname, firstname).then((data) => {
            playerData(data)
            playerPicture(firstname, lastname)
        }).catch((err) => {
            console.log("Error:", err)
        })
    }
})

}

const chooseTeam = {
    "gsw":"Golden State Warriors",
    "lac":"Los Angeles Clippers",
    "lal":"Los Angeles Lakers",
    "pho":"Phoenix Suns",
    "sac":"Sacramento Kings",
    "dal":"Dallas Mavericks",
    "hou":"Houston Rockets",
    "mem":"Memphis Grizzlies",
    "nor":"New Orleans Pelicans",
    "sas":"San Antonio Spurs",
    "den":"Denver Nuggets",
    "min":"Minnesota Timberwolves",
    "okc":"Oklahoma City Thunder",
    "por":"Portland Trail Blazers",
    "uth":"Utah Jazz",
    "bos":"Boston Celtics",
    "bro":"Brooklyn Nets",
    "nyk":"New York Knicks",
    "phi":"Philadelphia 76ers",
    "tor":"Toronto Raptors",
    "chi":"Chicago Bulls",
    "cle":"Cleveland Cavaliers",
    "det":"Detroit Pistons",
    "ind":"Indiana Pacers",
    "mil":"Milwaukee Bucks",
    "atl":"Atlanta Hawks",
    "cha":"Charlotte Hornets",
    "mia":"Miami Heat",
    "orl":"Orlando Magic",
    "was":"Washington Wizards"
}