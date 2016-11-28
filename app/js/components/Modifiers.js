import React from 'react';
import Environmental from './modifiers/Environmental';
import EnvironmentalCompensation from './modifiers/EnvironmentalCompensation';
import Situational from './modifiers/Situational';
import Defensive from './modifiers/Defensive';
export default () => {
	return (
		<div>
			<Defensive />
			<Environmental />
			<EnvironmentalCompensation />
			<Situational />
		</div>
	)
}