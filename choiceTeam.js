#!/usr/bin/env node

const program = require('commander')
const chalk = require('chalk')
const inquirer = require('inquirer')

const { getPlayerStat, getTeamStat } = require('./getJson')
const { playerData, playerPicture } = require('./player')
const { teamData, getTeamName, choiceTeam } = require('./team')
var index = require('./index');

module.exports.choiceTeam = function () {
    var chooseTeamName =
    [
    "Golden State Warriors",
    "Los Angeles Clippers",
    "Los Angeles Lakers",
    "Phoenix Suns",
    "Sacramento Kings",
    "Dallas Mavericks",
    "Houston Rockets",
    "Memphis Grizzlies",
    "New Orleans Pelicans",
    "San Antonio Spurs",
    "Denver Nuggets",
    "Minnesota Timberwolves",
    "Oklahoma City Thunder",
    "Portland Trail Blazers",
    "Utah Jazz",
    "Boston Celtics",
    "Brooklyn Nets",
    "New York Knicks",
    "Philadelphia 76ers",
    "Toronto Raptors",
    "Chicago Bulls",
    "Cleveland Cavaliers",
    "Detroit Pistons",
    "Indiana Pacers",
    "Milwaukee Bucks",
    "Atlanta Hawks",
    "Charlotte Hornets",
    "Miami Heat",
    "Orlando Magic",
    "Washington Wizards"
    ]
    
    inquirer.prompt([
        {
            type: 'list',
            message: 'Choose a team to find players',
            name: 'choiceTeam',
            choices: chooseTeamName
        },
        ]).then((answers) => {
            if(answers){
                const longTeamName = answers.choiceTeam;
                console.log("This is " + longTeamName + " players!");
                const teamname = chooseTeam2[longTeamName];
                console.log(teamname);
                getTeamStat(teamname).then((data) => {
                    console.log(data.length)
                    index.teamData(data);
                }).catch((err) => {
                    console.log("Error:", err)
                })
            }
        })
    
    }

    const chooseTeam2 = {
        "Golden State Warriors":"gsw",
        "Los Angeles Clippers":"lac",
        "Los Angeles Lakers":"lal",
        "Phoenix Suns":"pho",
        "Sacramento Kings":"sac",
        "Dallas Mavericks":"dal",
        "Houston Rockets":"hou",
        "Memphis Grizzlies":"mem",
        "New Orleans Pelicans":"nor",
        "San Antonio Spurs":"sas",
        "Denver Nuggets":"den",
        "Minnesota Timberwolves":"min",
        "Oklahoma City Thunder":"okc",
        "Portland Trail Blazers":"por",
        "Utah Jazz":"uth",
        "Boston Celtics":"bos",
        "Brooklyn Nets":"bro",
        "New York Knicks":"nyk",
        "Philadelphia 76ers":"phi",
        "Toronto Raptors":"tor",
        "Chicago Bulls":"chi",
        "Cleveland Cavaliers":"cle",
        "Detroit Pistons":"det",
        "Indiana Pacers":"ind",
        "Milwaukee Bucks":"mil",
        "Atlanta Hawks":"atl",
        "Charlotte Hornets":"cha",
        "Miami Heat":"mia",
        "Orlando Magic":"orl",
        "Washington Wizards":"was"
    }