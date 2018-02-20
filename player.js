const request = require('request');
const pictureTube = require('picture-tube')
const table = require('cli-table')

// instantiate 
var tablePlayer = new table({
    head: ['', 'Info'],
    colWidths: [10, 30]
});
 
var tablePlayer2 = new table({
    head: ['', 'Info'],
    colWidths: [10, 30]
});


// Get Player Stats from JSON
module.exports.playerData = function (data) {
    const jsonObject = JSON.parse(data);
    // table is an Array, so you can `push`, `unshift`, `splice` and friends 
    tablePlayer.push(
        ['Name', jsonObject.name],
        ['Team', jsonObject.team_name],
        ['Games', jsonObject.games_played]
    );
    tablePlayer2.push(
        ['Min/G', jsonObject.minutes_per_game],
        ['FG%', jsonObject.field_goal_percentage],
        ['3pts%', jsonObject.three_point_percentage],
        ['Pts/G', jsonObject.points_per_game],
        ['Rbds/G', jsonObject.rebounds_per_game],
        ['Assts/G', jsonObject.assists_per_game],
        ['Stls/G', jsonObject.steals_per_game],
        ['Blocks/G', jsonObject.blocks_per_game],
        ['Trnovs/G', jsonObject.turnovers_per_game],
        ['PER', jsonObject.player_efficiency_rating],
    )
    console.log(tablePlayer.toString())
    console.log(tablePlayer2.toString())

}

// Get Player Picture from URL
module.exports.playerPicture = function (firstname, lastname) {
    // Display Player Picture
    const tube = pictureTube();
    tube.pipe(process.stdout);
    request(`https://nba-players.herokuapp.com/players/${lastname}/${firstname}`).pipe(tube);
}