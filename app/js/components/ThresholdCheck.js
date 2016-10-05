import React from 'react';
import * as css from '../../styles/main.css';
export default ({check}) => {
	const attackLimit = check.attack.limit ? `[${check.attack.limit}]` : '';

	return (<div className={ css.categoryitem }>
	<div className="row">{ check.name } - { check.testType }</div>
	<div className="row">{ check.attack.attribute } + { check.attack.skill } { attackLimit }</div>
	</div>);
}