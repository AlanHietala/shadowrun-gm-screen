import * as attributeTypes from '../constants/AttributeTypes';
import * as skills from '../constants/Skills';
import * as hardwareAttributes from '../constants/HardwareAttributes';
import * as limits from '../constants/Limits';
import * as testTypes from '../constants/TestTypes';

export default {
	social: [
		{
			name: 'Con',
			testType: testTypes.OPPOSED,
			attack: {
				attribute: attributeTypes.CHARISMA,
				skill: skills.CON,
				limit: limits.SOCIAL
			},
			defence: {
				attribute: attributeTypes.CHARISMA,
				skill: skills.CON,
				limit: limits.SOCIAL
			}
		},
		{
			name: 'Etiquette',
			testType: testTypes.OPPOSED,
			attack: {
				attribute: attributeTypes.CHARISMA,
				skill: skills.ETIQUETTE,
				limit: limits.SOCIAL
			},
			defence: {
				attribute: attributeTypes.CHARISMA,
				skill: skills.PERCEPTION,
				limit: limits.SOCIAL
			}
		},
		{
			name: 'Impersonation',
			testType: testTypes.OPPOSED,
			attack: {
				attribute: attributeTypes.CHARISMA,
				skill: skills.IMPERSONATION,
				limit: limits.SOCIAL
			},
			defence: {
				attribute: attributeTypes.INTUITION,
				skill: skills.PERCEPTION,
				limit: limits.MENTAL
			}
		},
		{
			name: 'Intimidation',
			testType: testTypes.OPPOSED,
			attack: {
				attribute: attributeTypes.CHARISMA,
				skill: skills.INTIMIDATION,
				limit: limits.SOCIAL
			},
			defence: {
				attribute: attributeTypes.WILLPOWER,
				skill: skills.INTIMIDATION,
				limit: limits.SOCIAL
			}
		},
		{
			name: 'Leadership',
			testType: testTypes.OPPOSED,
			attack: {
				attribute: attributeTypes.CHARISMA,
				skill: skills.LEADERSHIP,
				limit: limits.SOCIAL
			},
			defence: {
				attribute: attributeTypes.WILLPOWER,
				skill: skills.LEADERSHIP,
				limit: limits.SOCIAL
			}
		},
		{
			name: 'Negotiation',
			testType: testTypes.OPPOSED,
			attack: {
				attribute: attributeTypes.CHARISMA,
				skill: skills.NEGOTIATION,
				limit: limits.SOCIAL
			},
			defence: {
				attribute: attributeTypes.CHARISMA,
				skill: skills.NEGOTIATION,
				limit: limits.SOCIAL
			}
		},
		{
			name: 'Performance',
			testType: testTypes.OPPOSED,
			attack: {
				attribute: attributeTypes.CHARISMA,
				skill: skills.PERFORMANCE,
				limit: limits.SOCIAL
			},
			defence: {
				attribute: attributeTypes.CHARISMA,
				skill: attributeTypes.WILLPOWER,
				limit: null
			}
		}
	],
	vehicle: [
		{
			name: 'Ground Vehicle Test',
			testType: testTypes.THRESHOLD,
			attack: {
				attribute: attributeTypes.REACTION,
				skill: skills.PILOT_GROUND_CRAFT,
				limit: limits.SPEED_OR_HANDLING
			}
		},
		{
			name: 'Cut off',
			testType: testTypes.OPPOSED,
			attack: {
				attribute: attributeTypes.REACTION,
				skill: skills.PILOT_GROUND_CRAFT,
				limit: limits.SPEED_OR_HANDLING
			},
			defence: {
				attribute: attributeTypes.REACTION,
				skill: skills.PILOT_GROUND_CRAFT,
				limit: limits.SPEED_OR_HANDLING
			}
		},
		{
			name: 'Crash',
			testType: testTypes.THRESHOLD,
			attack: {
				attribute: attributeTypes.REACTION,
				skill: skills.PILOT_GROUND_CRAFT,
				limit: limits.SPEED_OR_HANDLING
			},
			defence: {
				attribute: attributeTypes.REACTION,
				skill: skills.PILOT_GROUND_CRAFT,
				limit: limits.SPEED_OR_HANDLING
			}
		},
		{
			name: 'Ram',
			testType: testTypes.OPPOSED,
			attack: {
				attribute: attributeTypes.REACTION,
				skill: skills.PILOT_GROUND_CRAFT,
				limit: limits.SPEED_OR_HANDLING
			},
			defence: {
				attribute: attributeTypes.REACTION,
				skill: attributeTypes.INTUITION,
				limit: limits.SPEED_OR_HANDLING
			}
		},
		{
			name: 'Passive Gunnery',
			testType: testTypes.OPPOSED,
			attack: {
				attribute: attributeTypes.LOGIC,
				skill: skills.GUNNERY,
				limit: limits.ACCURACY
			},
			defence: {
				attribute: attributeTypes.REACTION,
				skill: attributeTypes.INTUITION,
				limit: limits.SPEED_OR_HANDLING
			}
		}
	],
	matrix: [
		{
			name: 'Bruteforce',
			marks: 0,
			testType: testTypes.OPPOSED,
			attack: {
				attribute: attributeTypes.LOGIC,
				skill: skills.CYBERCOMBAT,
				limit: hardwareAttributes.ATTACK
			},
			defence: {
				attribute: attributeTypes.WILLPOWER,
				skill: hardwareAttributes.FIREWALL,
				limit: null
			}
		},
		{
			name: 'Control Device',
			testType: testTypes.OPPOSED,
			attack: {
				attribute: 'as skill',
				skill: '',
				limit: null
			},
			defence: {
				attribute: 'as skill',
				skill: '',
				limit: null
			}
		},
		{
			name: 'Crack File',
			marks: 1,
			testType: testTypes.OPPOSED,
			attack: {
				attribute: attributeTypes.LOGIC,
				skill: skills.HACKING,
				limit: hardwareAttributes.ATTACK
			},
			defence: {
				attribute: 'Protection rating x 2',
				skill: '',
				limit: null
			}
		},
		{
			name: 'Crash Program',
			testType: testTypes.OPPOSED,
			attack: {
				attribute: attributeTypes.LOGIC,
				skill: skills.CYBERCOMBAT,
				limit: hardwareAttributes.ATTACK
			},
			defence: {
				attribute: attributeTypes.INTUITION,
				skill: hardwareAttributes.FIREWALL,
				limit: null
			}
		},
		{
			name: 'Data Spike',
			marks: 0,
			testType: testTypes.OPPOSED,
			attack: {
				attribute: attributeTypes.LOGIC,
				skill: skills.CYBERCOMBAT,
				limit: hardwareAttributes.ATTACK
			},
			defence: {
				attribute: attributeTypes.INTUITION,
				skill: hardwareAttributes.FIREWALL,
				limit: null
			}
		},
		{
			name: 'Disarm Databomb',
			marks: 0,
			testType: testTypes.OPPOSED,
			attack: {
				attribute: attributeTypes.INTUITION,
				skill: skills.SOFTWARE,
				limit: hardwareAttributes.FIREWALL
			},
			defence: {
				attribute: 'databomb rating x2',
				skill: '',
				limit: null
			}
		},
		{
			name: 'Edit File',
			testType: testTypes.OPPOSED,
			attack: {
				attribute: attributeTypes.LOGIC,
				skill: skills.COMPUTER,
				limit: hardwareAttributes.DATA_PROCESSING
			},
			defence: {
				attribute: attributeTypes.INTUITION,
				skill: hardwareAttributes.FIREWALL,
				limit: null
			}
		},
		{
			name: 'Erase Mark',
			testType: testTypes.OPPOSED,
			attack: {
				attribute: attributeTypes.LOGIC,
				skill: skills.COMPUTER,
				limit: hardwareAttributes.ATTACK
			},
			defence: {
				attribute: attributeTypes.WILLPOWER,
				skill: hardwareAttributes.FIREWALL,
				limit: null
			}
		},
		{
			name: 'Erase Matrix Signature',
			testType: testTypes.OPPOSED,
			attack: {
				attribute: attributeTypes.RESONANACE,
				skill: skills.COMPUTER,
				limit: hardwareAttributes.ATTACK
			},
			defence: {
				attribute: 'signature rating x 2',
				skill: '',
				limit: ''
			}
		},
		{
			name: 'Format Device',
			testType: testTypes.OPPOSED,
			attack: {
				attribute: attributeTypes.LOGIC,
				skill: skills.COMPUTER,
				limit: hardwareAttributes.SLEAZE
			},
			defence: {
				attribute: attributeTypes.WILLPOWER,
				skill: hardwareAttributes.FIREWALL,
				limit: null
			}
		},
		{
			name: 'Hack on the Fly',
			testType: testTypes.OPPOSED,
			attack: {
				attribute: attributeTypes.LOGIC,
				skill: skills.HACKING,
				limit: hardwareAttributes.SLEAZE
			},
			defence: {
				attribute: attributeTypes.INTUITION,
				skill: hardwareAttributes.FIREWALL,
				limit: null
			}
		},
		{
			name: 'Hide',
			testType: testTypes.OPPOSED,
			attack: {
				attribute: attributeTypes.INTUITION,
				skill: skills.ELECTRONIC_WARFARE,
				limit: hardwareAttributes.SLEAZE
			},
			defence: {
				attribute: attributeTypes.INTUITION,
				skill: hardwareAttributes.DATA_PROCESSING,
				limit: null
			}
		},
		{
			name: 'Jack Out',
			testType: testTypes.OPPOSED,
			attack: {
				attribute: attributeTypes.WILLPOWER,
				skill: skills.HARDWARE,
				limit: hardwareAttributes.FIREWALL
			},
			defence: {
				attribute: attributeTypes.LOGIC,
				skill: hardwareAttributes.ATTACK,
				limit: null
			}
		},
		{
			name: 'Jam Signals',
			testType: testTypes.THRESHOLD,
			attack: {
				attribute: attributeTypes.LOGIC,
				skill: skills.ELECTRONIC_WARFARE,
				limit: hardwareAttributes.ATTACK
			}
		},
		{
			name: 'Jump Into Rigged Device',
			testType: testTypes.OPPOSED,
			attack: {
				attribute: attributeTypes.LOGIC,
				skill: skills.ELECTRONIC_WARFARE,
				limit: hardwareAttributes.DATA_PROCESSING
			},
			defence: {
				attribute: attributeTypes.WILLPOWER,
				skill: hardwareAttributes.FIREWALL,
				limit: null
			}
		},
		{
			name: 'Matrix Perception',
			testType: testTypes.OPPOSED,
			attack: {
				attribute: attributeTypes.INTUITION,
				skill: skills.COMPUTER,
				limit: hardwareAttributes.DATA_PROCESSING
			},
			defence: {
				attribute: attributeTypes.LOGIC,
				skill: hardwareAttributes.SLEAZE,
				limit: null
			}
		}],

	meat: [
		{
			name: 'Perception',
			testType: testTypes.THRESHOLD,
			attack: {
				attribute: attributeTypes.INTUITION,
				skill: skills.PERCEPTION,
				limit: limits.MENTAL
			}
		},
		{
			name: 'Stealth',
			testType: testTypes.OPPOSED,
			attack: {
				attribute: attributeTypes.AGILITY,
				skill: skills.SNEAKING,
				limit: limits.PHYSICAL
			},
			defence: {
				attribute: attributeTypes.INTUITION,
				skill: skills.PERCEPTION,
				limit: limits.MENTAL
			}
		}
	]
}