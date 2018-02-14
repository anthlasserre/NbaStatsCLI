const request = require('request');
const pictureTube = require('picture-tube')

// Get Player Stats from JSON
module.exports.playerData = function (data) {
    const jsonObject = JSON.parse(data);
    console.log('------------------')
    console.log('Name: ',jsonObject.name)
    console.log('Team: ',jsonObject.team_name)
    console.log('Games: ',jsonObject.games_played)
    console.log('Min/Games: ',jsonObject.minutes_per_game)
    console.log('FG%: ',jsonObject.field_goal_percentage)
    console.log('3pts%: ',jsonObject.three_point_percentage)
    console.log('Pts/Games: ',jsonObject.points_per_game)
    console.log('Rebounds/Games: ',jsonObject.rebounds_per_game)
    console.log('Assists/Games: ',jsonObject.assists_per_game)
    console.log('Steals/Games: ',jsonObject.steals_per_game)
    console.log('Blocks/Games: ',jsonObject.blocks_per_game)
    console.log('Turnovers/Games: ',jsonObject.turnovers_per_game)
    console.log('Player Efficiency Rating ',jsonObject.player_efficiency_rating)
    console.log('------------------')
}

// Get Player Picture from URL
module.exports.playerPicture = function (firstname, lastname) {
    // Display Player Picture
    const tube = pictureTube();
    tube.pipe(process.stdout);
    request(`https://nba-players.herokuapp.com/players/${lastname}/${firstname}`).pipe(tube);
}