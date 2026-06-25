export function calculateCareerResult(answers, data) {
  const { careerStyles, questions, workDirections } = data;
  const styleScores = Object.fromEntries(careerStyles.map((style) => [style.id, 0]));
  let answeredCount = 0;

  for (const question of questions) {
    const selectedId = answers[question.id];
    const selectedOption = question.options.find((option) => option.id === selectedId);
    if (!selectedOption) continue;
    answeredCount += 1;

    for (const score of selectedOption.scores) {
      styleScores[score.style] += score.points;
    }
  }

  const sortedStyles = [...careerStyles].sort((a, b) => {
    const scoreDiff = styleScores[b.id] - styleScores[a.id];
    return scoreDiff || a.title.localeCompare(b.title, "zh-CN");
  });

  const scoredDirections = workDirections.map((direction) => {
    const rawScore = direction.weights.reduce(
      (total, weight) => total + styleScores[weight.style] * weight.weight,
      0,
    );
    return { ...direction, rawScore };
  });

  const maxDirectionRawScore = Math.max(1, ...scoredDirections.map((direction) => direction.rawScore));
  const topDirections = scoredDirections
    .map((direction) => ({
      ...direction,
      score: Math.max(55, Math.round((direction.rawScore / maxDirectionRawScore) * 96)),
    }))
    .sort((a, b) => b.rawScore - a.rawScore || a.title.localeCompare(b.title, "zh-CN"))
    .slice(0, 5);

  return {
    styleScores,
    mainStyle: sortedStyles[0],
    topDirections,
    answeredCount,
    totalQuestions: questions.length,
  };
}
