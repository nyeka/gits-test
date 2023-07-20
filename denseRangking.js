const calculateRanking = (existingScores, gitsScores) => {
  const allScores = existingScores.concat(gitsScores);
  const sortedScores = allScores.sort((a, b) => b - a);
  const rankingMap = {};
  let currentRanking = 1;

  for (let i = 0; i < sortedScores.length; i++) {
    const score = sortedScores[i];
    if (i === 0 || score !== sortedScores[i - 1]) {
      rankingMap[score] = currentRanking;
    }
    currentRanking++;
  }
  const rankings = gitsScores.map((gitsScore) => rankingMap[gitsScore]);
  return rankings;
};

const existingScores = [100, 100, 50, 40, 40, 20, 10];
const gitsScores = [5, 25, 50, 120];
const rankings = calculateRanking(existingScores, gitsScores);
console.log("Rankings:");
console.log(rankings.join(" "));
