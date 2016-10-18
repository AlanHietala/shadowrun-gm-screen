import React from 'react';
import Category from './Category';
export default (props) => {

	return (<div>
		<h1>Vehicle Sequence</h1>
		<ul>
			<li>Crash</li>
			<ul>
				<li>Everyone resists Vehicle Body DV damage AP -6 </li>
			</ul>
			<li>Ram</li>
		</ul>
		<Category {...props}/>
	</div>);
}