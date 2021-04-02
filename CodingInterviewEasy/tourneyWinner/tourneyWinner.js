const HOME_TEAM_WON = 1;

function tournamentWinner(competitions, results) {
    // Write your code here.
    let rslt = "";
    let obj = { [rslt]: 0 };
    for (let i = 0; i < competitions.length; i++) {
        const result = results[i];
        const [homeTeam, awayTeam] = competitions[i];

        const winner = result === HOME_TEAM_WON ? homeTeam : awayTeam;

        updateScores(winner, 3, obj);

        if (obj[winner] > obj[rslt]) {
            rslt = winner;
        }
    }
    return rslt;
}

function updateScores(team, points, scores) {
    if (!(team in scores)) scores[team] = 0;

    scores[team] += points;
}

const comp = [["HTML", "C#"], ["C#", "Python"], ["Python" ,"HTML"]];
const results = [0, 0, 1]

console.log(tournamentWinner(comp, results))