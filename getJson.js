const request = require('request-promise-native');

module.exports.getPlayerStat = async function (lastname, firstname) {
    const response = await request(`https://nba-players.herokuapp.com/players-stats/${lastname}/${firstname}`)
    return response
}

module.exports.getTeamStat = async function (teamname) {
    const response = await request(`https://nba-players.herokuapp.com/players-stats-teams/${teamname}`)
    return response
}