const team = {
  _players: [
    {firstName: 'John', lastName: 'Smith', age:25},
    {firstName: 'Justin', lastName: 'rodriguez', age:35},
    {firstName: 'sally', lastName: 'may', age:21},
  ],
  _games: [
    {opponent: 'vegtables', teamPoints: 22, opponentPoints: 18},
    {opponent: 'tornaders', teamPoints: 29, opponentPoints: 14},
    {opponent: 'almosters', teamPoints: 13, opponentPoints: 2}
  ],
  
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName,
      lastName,
      age
    };
    this.players.push(player);
  },
  
  addGame(opponents, teamPoints, opponentPoints) {
    const game = {
      opponents,
      teamPoints,
      opponentPoints
    }
    this.games.push(game);
  }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('sea lions', 110, 96);
team.addGame('dandelions', 56, 54);
team.addGame('other lions', 68, 42);

console.log(team.games);