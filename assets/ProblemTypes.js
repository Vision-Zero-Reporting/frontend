const ProblemTypes = {
    FOCUS: { // 🔴
        displayAsRegistered: true,
        name: 'Focus',
        id: 'FOCUS',
        what: 'Identifies if a VRU is the focus of a sentence',
        icon: 'eye',
        color: 'rgba(214, 81, 41, 1)',
        lightColor: 'rgba(214, 81, 41, 0.2)',
        issue: 'Sentence places focus on VRU',
        explain: 'When a vulnerable road user is the focus of the sentence, readers blame them and dismiss preventative measures.',
        fix: 'Change the focus to be on the driver.',
        examples: [
            { type: 'good', text: 'A driver struck a pedestrian.' },
            { type: 'bad', text: 'A pedestrian was struck by a driver.' },
        ]
    },
    AGENCY: { // 🔵
        displayAsRegistered: true,
        name: 'Agency',
        id: 'AGENCY',
        what: 'Determines if a crash-related sentence is missing agency',
        icon: 'account-child',
        color: 'rgba(31, 179, 224, 1)',
        lightColor: 'rgba(31, 179, 224, 0.2)',
        issue: 'Sentence lacks agent',
        explain: 'Sentences with agents make the actions of the perpetrator clear and reduce victim blaming.',
        fix: 'Add the missing agent to the sentence.',
        examples: [
            { type: 'good', text: 'A bicyclist was struck and killed by a driver on Tuesday night.' },
            { type: 'bad', text: 'A bicyclist was struck and killed on Tuesday night.' },
        ]
    },
    OBJECT: { // 🟢
        displayAsRegistered: true,
        name: 'Object',
        id: 'OBJECT',
        what: 'Determines if actors are described by object-based language rather than person-based language',
        icon: 'package-variant',
        color: 'rgba(73, 194, 25, 1)',
        lightColor: 'rgba(73, 194, 25, 0.2)',
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
    COUNTER: { // 🟡
        displayAsRegistered: true,
        isExperimental: true,
        name: 'Counterfactual',
        id: 'COUNTER',
        what: 'Identifies presence of counterfactual statements which obscure the systemic nature of crashes and increase likelihood of victim blaming',
        icon: 'clipboard-alert',
        color: 'rgba(244, 220, 42, 1)',
        lightColor: 'rgba(244, 220, 42, 0.2)',
        issue: 'Distracting counterfactual',
        explain: 'Readers place more blame on victims when articles use more counterfactual statements. Counterfactuals also obscure the systemic nature of incidents and place unreasonable burden on individuals.',
        fix: '',
        examples: []
    },
    FRAMING: { // 🟣
        displayAsRegistered: false,
        isExperimental: true,
        name: 'Framing',
        id: 'FRAMING',
        what: 'Determines if an article includes thematic framing',
        icon: 'image-filter-frames',
        color: 'rgba(116, 77, 168, 1)',
        lightColor: 'rgba(116, 77, 168, 0.2)',
        issue: 'Article lacks thematic framing',
        explain: 'Readers who encounter episodic frames tend to hold individuals responsible for negative outcomes and put less pressure on public leaders to make changes.',
        fix: '',
        examples: []
    },
    ACCIDENT: { // 🟠
        displayAsRegistered: true,
        name: 'Accident',
        id: 'ACCIDENT',
        what: 'Identifies usage of the word "accident"',
        icon: 'car-emergency',
        color: 'rgba(238, 180, 23, 1)',
        lightColor: 'rgba(238, 180, 23, 0.2)',
        issue: 'Article uses the word "accident"',
        explain: 'The word "accident" distracts from the preventable nature of car crashes, and implies inevitability and faultlessness for this systemic problem.',
        fix: 'Prefer the words crash, collision, or incident',
        examples: [
            { type: 'good', text: 'The car crash has left two injured.' },
            { type: 'bad', text: 'The accident has left two injured.' },
        ]
    }
}

export default ProblemTypes