#!/usr/bin/env node

const program = require('commander')
const chalk = require('chalk')
const inquirer = require('inquirer')
const { getPlayerStat, getTeamStat } = require('./getJson')
const { playerData, playerPicture } = require('./player')
const { teamData, getTeamName, choiceTeam } = require('./team')

program
.version('1.2.0')
.option('-p, --player [firstname lastname]', 'Show player stats')
.option('-t, --team [team-name]', 'Show team stats')

// On parse (convertit en format utilisable) les options // fonction synchrone
program.parse(process.argv)

// Maintenant on peut les utiliser
if (program.player) {
    const fullname = process.argv[3] + " " + process.argv[4]
    console.log(chalk.bgRed('You are searching: ', fullname))
    const firstname = process.argv[3].toLocaleLowerCase()
    const lastname = process.argv[4].toLocaleLowerCase()
    getPlayerStat(lastname, firstname).then((data) => {
        playerData(data)
        playerPicture(firstname, lastname)
        
    }).catch((err) => {
        console.log("Error:", err)
    })
} else if (program.team) {
    const teamname = `${program.team}`
    getTeamName(teamname)
    getTeamStat(teamname).then((data) => {
        teamData(data)
    }).catch((err) => {
        console.log("Error:", err)
    })
} else {
    program.help()
}
module.exports.teamData = teamData;