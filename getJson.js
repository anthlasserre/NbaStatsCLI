const request = require('request-promise-native');

module.exports.getPlayerStat = async function (lastname, firstname) {
    const response = await request(`https://nba-players.herokuapp.com/players-stats/${lastname}/${firstname}`)
    return response
}