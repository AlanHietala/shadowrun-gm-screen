import React from 'react';
export default ({check}) => {
	const defLimit = check.defence.limit ? `[${ check.defence.limit }]` : '';
	const attackLimit = check.attack.limit ? `[${ check.attack.limit }]` : '';
	const attackSkill = check.attack.skill ? ` + ${check.attack.skill}`: '';
	const defSkill = check.defence.skill ? ` + ${check.defence.skill}`: '';
	const marksRequired = check.marks !== undefined ? `- Marks: ${ check.marks }` : '';
	return (<div>
				<div className="row">{ check.name } { marksRequired }</div>
				<div className="row">{ check.attack.attribute }{ attackSkill } { attackLimit } vs { check.defence.attribute }{ defSkill } { defLimit } </div>
	</div>);
}