import React from 'react';
import Environmental from './modifiers/Environmental';
import EnvironmentalCompensation from './modifiers/EnvironmentalCompensation';
import Situational from './modifiers/Situational';
import Defensive from './modifiers/Defensive';
import Perception from './modifiers/Perception';
export default () => {
	return (
		<div>
			<Perception />
			<Defensive />
			<Environmental />
			<EnvironmentalCompensation />
			<Situational />
		</div>
	)
}