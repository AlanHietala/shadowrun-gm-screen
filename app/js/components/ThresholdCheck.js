import React from 'react';
export default ({check}) => {
	const attackLimit = check.attack.limit ? `[${check.attack.limit}]` : '';

	return (<div>
	<div className="row">{ check.name } - { check.testType }</div>
	<div className="row">{ check.attack.attribute } + { check.attack.skill } { attackLimit }</div>
	</div>);
}