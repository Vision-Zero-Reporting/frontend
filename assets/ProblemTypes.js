const ProblemTypes = {
    FOCUS: { // 🔴
        displayAsRegistered: true,
        name: 'Focus',
        id: 'FOCUS',
        what: 'Identifies if a VRU is the focus of a sentence',
        icon: 'eye',
        color: '#d65129',
        issue: 'Sentence places focus on VRU',
        explain: 'When a vulnerable road user is the focus of the sentence, readers blame them and dismiss preventative measures.',
        fix: 'Change the focus to be on the driver.'
    },
    AGENCY: { // 🔵
        displayAsRegistered: true,
        name: 'Agency',
        id: 'AGENCY',
        what: 'Determines if a crash-related sentence is missing agency',
        icon: 'account-child',
        color: '#1fb3e0',
        issue: 'Sentence lacks agent',
        explain: 'Sentences with agents make the actions of the perpetrator clear and reduce victim blaming.',
        fix: ''
    },
    OBJECT: { // 🟢
        displayAsRegistered: true,
        name: 'Object-based language',
        id: 'OBJECT',
        what: 'Determines if actors are described by object-based language rather than person-based language',
        icon: 'package-variant',
        color: '#49c219',
        issue: 'Emphasis is placed on object instead of its agent',
        explain: 'Referring to objects (e.g. vehicle, car) instead of humans (e.g. driver) neutralizes blame, and inconsistent application of this writing assigns unequal blame on VRUs.',
        fix: ''
    },
    OBJECTP: { // 🟢
        displayAsRegistered: false,
        name: 'Object-based language',
        id: 'OBJECTP',
        icon: 'package-variant',
        color: '#49c219',
        issue: 'Language personifies a vehicle-like object',
        explain: 'Referring to objects instead of humans neutralizes blame, and inconsistent application of this writing assigns unequal blame on VRUs.',
        fix: ''
    },
    COUNTER: { // 🟡
        displayAsRegistered: false,
        name: 'Counterfactual',
        id: 'COUNTER',
        what: 'Identifies presence of counterfactual statements which obscure the systemic nature of crashes and increase likelihood of victim blaming',
        icon: 'clipboard-alert',
        color: '#f4dc2a',
        issue: 'Distracting counterfactual',
        explain: 'Readers place more blame on victims when articles use more counterfactual statements. Counterfactuals also obscure the systemic nature of incidents and place unreasonable burden on individuals.',
        fix: ''
    },
    FRAMING: { // 🟣
        displayAsRegistered: false,
        name: 'Framing',
        id: 'FRAMING',
        what: 'Determines if an article includes thematic framing',
        icon: 'image-filter-frames',
        color: '#744da8',
        issue: 'Article lacks thematic framing',
        explain: 'Readers who encounter episodic frames tend to hold individuals responsible for negative outcomes and put less pressure on public leaders to make changes.',
        fix: ''
    },
    ACCIDENT: { // 🟠
        displayAsRegistered: true,
        name: 'Accident',
        id: 'ACCIDENT',
        what: 'Identifies usage of the word "accident"',
        icon: 'car-emergency',
        color: '#eeb417',
        issue: 'Article uses the word "accident"',
        explain: 'The word "accident" distracts from the preventable nature of car crashes, and implies inevitability and faultlessness for this systemic problem.',
        fix: ''
    }
}

export default ProblemTypes