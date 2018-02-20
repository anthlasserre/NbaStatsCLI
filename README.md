# NbaStatsCLI

Hi buddy! You're just on my fuckin' directory to know **NBA Player Stats**.

## Installation

First of all you have to install **nodeJs**.

> **Debian/Ubuntu:** You juste have to type this command `sudo apt-get install -y nodejs`.

> **RedHat/CentOS/Fedora:** You juste have to type this command `sudo yum -y install nodejs`.

> *Others:* If you don't find your distribution please refer to https://nodejs.org/en/download/package-manager/ .

Next download this project and unzip it.

## Initialize nbastats
Once you made the provious steps you have to go the project folder.
`cd ~/Desktop/NbaStatsCLI/` (for example)
Install all the necessary node_modules
`npm install -g`

>  *node_modules used*: [request](https://www.npmjs.com/package/request), [commander](https://www.npmjs.com/package/commander), [inquirer](https://www.npmjs.com/package/inquirer), [picture-tube](https://www.npmjs.com/package/picture-tube), [chalk](https://www.npmjs.com/package/chalk), [cli-table](https://www.npmjs.com/package/cli-table) .

> *Info*: To resize player picture you have to edit directly **picture-tube** node_module. Go to index.js of it and change `opts.cols = 80` to the size you want (for example: `opts.cols = 40`).

## Use nbastats

After made the previous steps you can now use **nbastats**.
### Search a player
option `-p` to search a player.
`nbastats -p Tony Parker`
`nbastats -p Lebron James`

### Search a team
option `-t`  to search a team.
`nbastats -t sas` (for San Antonio Spurs)
`nbastats -t lal` (for Los Angeles Lakers)
>  *Info*: If you don't know the team name acronym, just type:
>  `nbastats -t`. It will give you all the teams acronyms.


## Examples
### Search a player
<img src="https://raw.githubusercontent.com/anthlasserre/NbaStatsCLI/master/imgReadme/nbaStatsSearchPlayer.gif" width="400" />

### Search a team
<img src="https://raw.githubusercontent.com/anthlasserre/NbaStatsCLI/master/imgReadme/nbaStatsSearchTeamPlayer.gif" width="400" />

