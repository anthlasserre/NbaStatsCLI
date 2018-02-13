const request = require('request');
const pictureTube = require('picture-tube')

module.exports.player = function (data, lastname, firstname) {
    const jsonObject = JSON.parse(data);
    console.log('------------------')
    console.log('Name: ',jsonObject.name)
    console.log('Team: ',jsonObject.team_name)
    console.log('Games: ',jsonObject.games_played)
    console.log('Min/Games: ',jsonObject.minutes_per_game)
    console.log('FGA/Games: ',jsonObject.field_goals_attempted_per_game)
    console.log('FGM/Games: ',jsonObject.field_goals_made_per_game)
    console.log('------------------')
    
    const tube = pictureTube();
    tube.pipe(process.stdout);
    request(`https://nba-players.herokuapp.com/players/${lastname}/${firstname}`).pipe(tube);
}