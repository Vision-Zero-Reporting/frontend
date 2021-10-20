const Grades = {
  AA: 'A+',
  A: 'A',
  B: 'B',
  C: 'C',
  D: 'D',
  F: 'F'
}

const thresholds = [
  [1.00, Grades.AA],
  [0.9, Grades.A],
  [0.8, Grades.B],
  [0.65, Grades.C],
  [0.5, Grades.D],
  [-Infinity, Grades.F],
]

const MaxScores = {
  FRAMING: 9, // must be multiple of 3
  COUNTER: 6,
  ACCIDENT: 4,
  OBJECT: 4,
  AGENCY: 3,
  FOCUS: 3
}

const MaxScore = Object.values(MaxScores).reduce((tally, value) => tally + value)

function getGrade(problems) {
  // Current scores
  const currentScores = {...MaxScores}
  currentScores.FRAMING = 0

  // Compute the points:
  //  1. Framing elements are worth 3 points
  //  2. Counterfactuals are penalty of 2 points
  //  3. Accident, object, agency, and focus are penalty of 1 point
  for(const problem of problems) {
    if(problem.type === 'FRAMING') currentScores.FRAMING += 3
    else if(problem.type === 'COUNTER') currentScores.COUNTER -= 2
    else currentScores[problem.type] -= 1
  }

  // No scores can be below 0, and enforce maximum framing score
  Object.keys(currentScores).forEach(key => {
    if(currentScores[key] < 0) currentScores[key] = 0
  })
  currentScores.FRAMING = Math.min(currentScores.FRAMING, MaxScores.FRAMING)

  // Tally up the scores
  const scoreSum = Object.values(currentScores).reduce((tally, value) => tally + value)
  const percent = scoreSum / MaxScore

  let letter = null
  for(const threshold of thresholds) {
    if(percent >= threshold[0]) {
      letter = threshold[1]
      break
    }
  }

  return { letter, currentScores, scoreSum }
}

export { getGrade, MaxScore, MaxScores }
