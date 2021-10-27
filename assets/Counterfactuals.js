const Counterfactuals = {
  COUNTER_NO_HELMET: {
    name: 'No helmet',
    icon: 'hard-hat',
    example: 'A bicyclist was injured after being struck by a car. He wasn\'t wearing a helmet.',
    effect: 'Implies the bicyclist is at fault. Ignores the contribution of the driver and poor road design. Implies outcome would have been different if a helmet were worn.'
  },
  COUNTER_DARK_CLOTHING: {
    name: 'Dark clothing',
    icon: 'tshirt-crew',
    example: 'A pedestrian was hit and killed last night. She was wearing dark-colored clothes.',
    effect: 'Places all the blame on the victim, without discussing road design elements like street lights. Implies that had lighter-color clothing been worn, the crash wouldn\'t have happened. Distracts from the nationwide trend of rapidly increasing pedestrian fatalities (50% increase in the past decade) that cannot be rationally attributed to clothing color.'
  },
  COUNTER_NO_USE_CROSSWALK: {
    name: 'Crosswalk usage',
    icon: 'ski-cross-country',
    example: 'The woman was injured after being struck by a vehicle. She was not using a crosswalk.',
    effect: 'Implies the woman is at fault because a crosswalk was not used, but ignores road design and driver responsibility. Does not discuss whether crosswalks are even available, or if they are within reasonable walking distance. Also ignores the fact that most pedestrian injuries and deaths occur at marked crosswalks.'
  },
  COUNTER_ROAD_DELAY_CLOSE: {
    name: 'Road closed/delay',
    icon: 'map-clock',
    example: 'The crash caused road closures along Rt 10, delaying traffic for upwards of 4 hours.',
    effect: 'Focuses on the inconvenience for other drivers, rather than the injuries or death that may have occurred. Reinforces the prioritization of speed over safety.'
  },
  COUNTER_ENVIRONMENTAL_FACTOR: {
    name: 'Environmental conditions',
    icon: 'weather-lightning-rainy',
    example: 'A vehicle struck and killed a bicyclist. The roads were wet and it was dark out.',
    effect: 'Absolves actors of responsibility to safely operate their vehicle according to current weather conditions (e.g. drive slower when it is raining or snowy). Ignores road safety factors like quality and timeliness of snow or ice removal, or presence of street lights.'
  },
  COUNTER_IMPAIRMENT: {
    name: 'Impairment (alcohol, drugs, drowsiness)',
    icon: 'glass-mug-variant',
    example: 'Alcohol and drugs do not appear to be a factor.',
    effect: 'When speculative statements are made, the article introduces bias in the form of rushing to the actor\'s defense before an investigation is even completed. Whether or not impairment was the cause of the crash, mitigating factors are not discussed.'
  },
  COUNTER_NO_PROTECTIVE_EQUIPMENT: {
    name: 'No protective equipment',
    icon: 'shield-off',
    example: 'The bicyclist was not wearing a reflective vest and did not have a light.',
    effect: 'Places all the blame on the victim, but ignores road safety factors like street illumination, safe bike lanes and sidewalks, etc.'
  },
  COUNTER_VRU_IN_ROADWAY: {
    name: 'VRU in roadway',
    icon: 'walk',
    example: 'The pedestrian was walking in the roadway when he was struck.',
    effect: 'Places fault on the pedestrian, without discussing the presence or absence of sidewalks, or why the driver was not able to operate their vehicle safely.'
  },
  COUNTER_DIDNT_SEE: {
    name: 'Driver didn\'t see',
    icon: 'eye-off',
    example: 'The driver told us they could not see the pedestrian until it was too late.',
    effect: 'Article allows the driver to shape the narrative in their favor and absolve themselves of responsibility. Does not discuss the issue of drivers not being able to see reasonable hazards.'
  },
}

export default Counterfactuals
