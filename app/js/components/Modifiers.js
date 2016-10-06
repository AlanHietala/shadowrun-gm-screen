import React from 'react';
import Environmental from './modifiers/Environmental';
import EnvironmentalCompensation from './modifiers/EnvironmentalCompensation';
import Situational from './modifiers/Situational';

export default () => {
	return (
		<div>
			<Environmental />
			<EnvironmentalCompensation />
			<Situational />
		</div>
	)
}