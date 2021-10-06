const Grades = {
  AA: 'A+',
  A: 'A',
  B: 'B',
  C: 'C',
  D: 'D',
  F: 'F'
}

const thresholds = [
  [+3, Grades.AA],
  [+1, Grades.A],
  [+0, Grades.B],
  [-3, Grades.C],
  [-5, Grades.D],
  [-Infinity, Grades.F],
]

function getGrade(problems) {
  let score = 0
  let framingScore = 0

  for(const problem of problems) {
    if(problem.type === 'COUNTER') score -= 2
    else if(problem.type === 'FRAMING') framingScore += 1
    else score -= 1
  }
  score += Math.min(framingScore, 3) // cannot get more than +3 points from framing

  let letter = null
  for(const threshold of thresholds) {
    if(score >= threshold[0]) {
      letter = threshold[1]
      break
    }
  }

  return { letter, score }
}

export default getGrade
