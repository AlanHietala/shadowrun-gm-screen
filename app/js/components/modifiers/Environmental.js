import React from 'react';
export default () => {
	return (<div>
		<h2>Environmental Modifiers</h2>
		<table>
			<tr>
				<th>Visibility</th>
				<th>Light/Glare</th>
				<th>Wind</th>
				<th>Range</th>
				<th>Modifier</th>
			</tr>
			<tr>
				<td>Clear</td>
				<td>Full Light / No Glare</td>
				<td>None or Light Breeze</td>
				<td>Short</td>
				<td>-</td>
			</tr>
			<tr>
				<td>Light Rain / Fog / Smoke</td>
				<td>Partial Light / Weak Glare</td>
				<td>Light Winds</td>
				<td>Medium</td>
				<td>-1</td>
			</tr>
			<tr>
				<td>Moderate Rain / Fog / Smoke</td>
				<td>Dim Light / Moderate Glare</td>
				<td>Moderate Winds</td>
				<td>Long</td>
				<td>-3</td>
			</tr>
			<tr>
				<td>Heavy Rain / Fog / Smoke</td>
				<td>Total Light / Blinding Glare</td>
				<td>Strong Winds</td>
				<td>Extreme</td>
				<td>-6</td>
			</tr>
			<tr>
				<td colSpan="4">Combination of two or more conditions at the -6 level row</td>
				<td>-10</td>
			</tr>
		</table>
	</div>)
}