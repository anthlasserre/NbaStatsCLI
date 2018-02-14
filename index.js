#!/usr/bin/env node

const program = require('commander')
const { getPlayerStat, getTeamStat } = require('./getJson')
const { playerData, playerPicture } = require('./player')
const { teamData } = require('./team')

program
.version('1.0.0')
.option('-p, --player [firstname lastname]', 'Show player stats')
.option('-t, --team [team-name]', 'Show team stats')
.option('-g, --game', 'Show game stats')

// On parse (convertit en format utilisable) les options // fonction synchrone
program.parse(process.argv)

// Maintenant on peut les utiliser
if (program.player) {
    const fullname = process.argv[3] + " " + process.argv[4]
    console.log('You are searching: ', fullname)
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
    console.log('You are searching: ', teamname)
    getTeamStat(teamname).then((data) => {
        teamData(data)
    }).catch((err) => {
        console.log("Error:", err)
    })
} else if (program.game) {
    console.log(`You are searching ${program.game} game`)
} else {
    program.help()
}



// const inquirer = require('inquirer')

// inquirer.prompt([
//     {
//         type: 'checkbox',
//         message: 'What do you want to do ?',
//         name: 'firstChoice',
//         choices: [
//             '1',
//             '2',
//             '3',
//         ]
//     },
// ]).then((answers) => {
//     console.log(answers)
//     if(inquirer.prompt.firstChoice === 1){
//         console.log("He wants to know a player buddy!")
//     }
//     if(inquirer.prompt.firstChoice === 2){
//         console.log("He wants to know a team buddy!")
//     }
//     if(inquirer.prompt.firstChoice === 3){
//         console.log("He wants to know a game buddy!")
//     }
// })

