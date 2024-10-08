const ProblemTypes = {
  FRAMING: { // 🟣
    name: 'Framing',
    id: 'FRAMING',
    impact: 'High',
    what: 'Determines if an article includes thematic framing',
    icon: 'image-filter-frames',
    issue: 'Article lacks thematic framing',
    explain: 'Thematic framing helps contextualize a car crash and draw attention to the bigger picture. By including thematic elements such as road design, statistics and trends, quotes, and safety initiatives, readers are more likely to understand that car crashes are foreseeable and preventable.',
    fix: 'Include at least 5 thematic elements.',
    examples: [
      { type: 'good', text: 'Number of car crashes in recent months' },
      { type: 'good', text: 'Discussion of road design (width, # lanes, speed limit, turn radius, speedbumps, presence of sidewalks)' },
      { type: 'good', text: 'Quotes from experts, like engineers or public safety officers' },
      { type: 'good', text: 'Comments from public officials or police/traffic enforcement' },
      { type: 'good', text: 'Mentions of safety initiatives like Vision Zero' },
      { type: 'good', text: 'Statistics from NHTSA, WHO, CDC, and other organizations' },
    ]
  },
  COUNTER: { // 🟡
    name: 'Counterfactual',
    id: 'COUNTER',
    impact: 'High',
    what: 'Identifies presence of counterfactual statements which obscure the systemic nature of crashes and increase likelihood of victim blaming',
    icon: 'clipboard-alert',
    issue: 'Counterfactual statements are present',
    explain: 'Cambridge Dictionary defines counterfactual as "thinking about what did not happen but could have happened". Counterfactuals are true statements, but they can easily distract from the systemic causes of crashes, imply bad outcomes were the victim\'s fault, and absolve faulty actors of responsibility. Because readers place more blame on victims when articles use more counterfactual statements, these statements should be removed or adjusted.',
    fix: 'Remove the counterfactual statements.',
    examples: [
      { type: 'bad', text: 'The bicyclist was not wearing a helmet.' },
      { type: 'bad', text: 'The pedestrian was wearing dark clothes.' },
      { type: 'bad', text: 'The pedestrian did not use a crosswalk.' },
      { type: 'bad', text: 'The crash caused road closures and traffic delays.' },
      { type: 'bad', text: 'It was dark out and the roads were wet.' },
      { type: 'bad', text: 'Alcohol does not appear to be a factor in the crash.' },
      { type: 'bad', text: 'The biker was not wearing protective equipment.' },
      { type: 'bad', text: 'The man was in the roadway.' },
      { type: 'bad', text: 'The driver didn\'t see the pedestrian.' },
    ]
  },
  ACCIDENT: { // 🟠
    name: 'Accident',
    id: 'ACCIDENT',
    impact: 'Med',
    what: 'Identifies usage of the word "accident"',
    icon: 'car-emergency',
    issue: 'Article uses the word "accident"',
    explain: 'The word "accident" distracts from the preventable nature of car crashes, and implies inevitability and faultlessness for this systemic problem.',
    fix: 'Prefer the words crash, collision, or incident.',
    examples: [
      { type: 'good', text: 'The car crash has left two injured.' },
      { type: 'bad', text: 'The accident has left two injured.' },
    ]
  },
  OBJECT: { // 🟢
    name: 'Object',
    id: 'OBJECT',
    impact: 'Med',
    what: 'Determines if actors are described by object-based language rather than person-based language',
    icon: 'package-variant',
    issue: 'Emphasis is placed on object instead of its agent',
    explain: 'Referring to objects (e.g. vehicle, car) instead of humans (e.g. driver) neutralizes blame, and inconsistent application of this writing assigns unequal blame on VRUs.',
    fix: 'Use people-based language instead of object-based language.',
    examples: [
      { type: 'good', text: 'The driver crashed into the woman.' },
      { type: 'good', text: 'The driver of the SUV fled the scene.' },
      { type: 'good', text: 'The man was injured after being hit by the driver of a 2014 Ford Escape.' },
      { type: 'bad', text: 'The SUV crashed into the woman.' },
      { type: 'bad', text: 'The SUV fled the scene.' },
      { type: 'bad', text: 'The man was injured after being hit by a 2014 Ford Escape.' },
    ]
  },
  AGENCY: { // 🔵
    name: 'Agency',
    id: 'AGENCY',
    impact: 'Low',
    what: 'Determines if a crash-related sentence is missing agency',
    icon: 'account-child',
    issue: 'Sentence lacks agent',
    explain: 'Sentences with agents make the actions of the perpetrator clear and reduce victim blaming.',
    fix: 'Add the missing agent to the sentence.',
    examples: [
      { type: 'good', text: 'A bicyclist was struck and killed by a driver on Tuesday night.' },
      { type: 'bad', text: 'A bicyclist was struck and killed on Tuesday night.' },
    ]
  },
  FOCUS: { // 🔴
    name: 'Focus',
    id: 'FOCUS',
    impact: 'Low',
    what: 'Identifies if a VRU is the focus of a sentence',
    icon: 'eye',
    issue: 'Sentence places focus on VRU',
    explain: 'When a vulnerable road user is the focus of the sentence, readers blame them and dismiss preventative measures.',
    fix: 'Change the focus to be on the driver.',
    examples: [
      { type: 'good', text: 'A driver struck a pedestrian.' },
      { type: 'bad', text: 'A pedestrian was struck by a driver.' },
    ]
  },
}

export default ProblemTypes
