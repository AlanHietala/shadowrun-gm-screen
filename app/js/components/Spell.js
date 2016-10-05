import React from 'react';
import css from '../../styles/main.css';
export default ({check}) => {
	const infoString = getInfoString(check);

	return (
		<div className={ css.categoryitem }>
			<div>{check.name}</div>
			<div>{infoString}</div>
			<div>{check.duration}</div>
			<div>Force {check.drain}</div>
		</div>
	)
}

const getInfoString = (spell) => {
	let infoArray = [];
	if(spell.isActive) {
		infoArray.push('active')
	}

	if(spell.isDirectional) {
		infoArray.push('directional')
	}

	if(spell.isMana) {
		infoArray.push('mana')
	} else {
		infoArray.push('physical')
	}

	if(spell.isLOS) {
		infoArray.push('LOS')
	}

	if(spell.isArea) {
		infoArray.push('AOE')
	}

	if(spell.isExtendedArea) {
		infoArray.push('Extended AOE')
	}

	if(spell.isPsychic) {
		infoArray.push('psychic')
	}

	return infoArray.join(', ');

}