// decalres a global variable for the game object
const game = gameObject();

function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1,
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7,
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15,
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5,
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1,
          },
        },
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2,
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10,
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5,
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0,
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12,
          },
        },
      },
    };
  }

// Build a function, numPointsScored that takes in an argument of a player's name and returns the number of points scored for that player
function numPointsScored(playerName) {
  for (let team in game) { // loops through each team in the object
    let players = game[team].players; // gets the team's players 
    if (playerName in players) { //checks if the player name passed as an argument is in the team's players object
      return players[playerName].points; // returns the points scored for that player
    }
  }
  return null; // returns null if the player name is not in the team's players object
}
console.log(numPointsScored("Alan Anderson")); // Returns 22

// Build a function, shoeSize, that takes in an argument of a player's name and returns the shoe size for that player
function shoeSize(playerName) { 
  for (let team in game) {
    let players = game[team].players;
    if (playerName in players) {
      return players[playerName].shoe;
    }
  }
  return null;
}
console.log(shoeSize("Alan Anderson")); // Returns 16

// Build a function, teamColors, that takes in an argument of the team name and returns an array of that teams colors.
function teamColors(teamName){
   for (let team in game) {
    let teams = game[team]["teamName"];
    if (teamName === teams) {
      return game[team]["colors"];
    }
   }
   return null;
}
console.log(teamColors("Brooklyn Nets")); // Returns ["Black", "White"]

// Build a function, teamNames, that operates on the game object to return an array of the team names.
function teamNames() { 
  let teamNames = [];
  for (let team in game) {
    teamNames.push(game[team]["teamName"]);
  }
  return teamNames;
}
console.log(teamNames());

// Build a function, playerNumbers, that takes in an argument of a team name and returns an array of the jersey numbers for that team.

function playerNumbers(teamName) {
  const playerNumbers = [];
  for (let team in game) {
    if (teamName === game[team]["teamName"]) {
      for (let player in game[team].players) {
        playerNumbers.push(game[team].players[player].number);
      }
    }
  }
  return playerNumbers;
}
console.log(playerNumbers("Brooklyn Nets")); 

// Build a function, playerStats, that takes in an argument of a player's name and returns an object of that player's stats
function playerStats(playerName) {
  for (let team in game) {
    if (playerName in game[team].players) {
      return game[team].players[playerName];
    }
  }
}
console.log(playerStats("Alan Anderson"));

// Build a function, bigShoeRebounds, that will return the number of rebounds associated with the player that has the largest shoe size. Break this one down into steps:
function bigShoeRebounds() {
  let biggestShoe = 0;
  let biggestShoeRebounds = 0;

  //Iterate over all players in all teams
  for (let team in game) { 
    for (let player in game[team].players) { 
      let shoeSize = game[team].players[player].shoe;

      //If player has the largest shoe size update the variable
      if (shoeSize > biggestShoe) { 
        biggestShoe = shoeSize;
        biggestShoeRebounds = game[team].players[player].rebounds;
      }
    }
  }
  return biggestShoeRebounds;
}
console.log(bigShoeRebounds());