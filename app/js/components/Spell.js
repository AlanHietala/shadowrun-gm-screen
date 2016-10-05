import React from 'react';
import css from '../../styles/main.css';
import * as spellCategories from '../constants/SpellCategories';
export default ({check}) => {
	const infoString = getInfoString(check);
	const resist = resistWith(check);
	const test = testWith(check);
	return (
		<div className={ css.categoryitem }>
			<div>{check.name}</div>
			<div>{infoString}</div>
			<div>{check.duration}</div>
			<div>Force {check.drain}</div>
			<div>Test: {test}</div>
			<div>Resist: {resist}</div>
		</div>
	)
}

const testWith = (spell) => {
	if(spell.spellCategory === spellCategories.COMBAT){
		if(!spell.isDirect) {
			return (<div>SPELLCASTING + MAGIC [FORCE] vs REACTION + INTUITION</div>)

				} else {
					return "NONE";
				}
	} else if(spell.spellCategory === spellCategories.DETECTION) {

	} else if(spell.spellCategory === spellCategories.HEALTH) {

	} else if(spell.spellCategory === spellCategories.ILLUSION) {

	} else if(spell.spellCategory === spellCategories.MANIPULATION) {

	}
}

const resistWith = (spell) => {
	if(spell.spellCategory === spellCategories.COMBAT){
		if(!spell.isDirect) {
			return (<div>
				<div>AP: -FORCE DV: FORCE + NET HITS</div>
				<div>BODY + ARMOR - AP</div>
			</div>);
		} else {
			return spell.isMana ? 'WILLPOWER' : 'BODY';
		}

	} else if(spell.spellCategory === spellCategories.DETECTION) {

	} else if(spell.spellCategory === spellCategories.HEALTH) {

	} else if(spell.spellCategory === spellCategories.ILLUSION) {

	} else if(spell.spellCategory === spellCategories.MANIPULATION) {

	}
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