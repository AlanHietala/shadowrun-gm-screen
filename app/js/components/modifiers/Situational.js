import React from 'react';
export default () => {
	return (<div>
		<h2>Situational Modifiers</h2>
		<table>
			<tr>
				<th>Situation</th>
				<th>Attacker Dice Pool Modifier</th>
			</tr>
			<tr>
				<td>Attacker firing from cover with imaging device</td>
				<td>-3</td>
			</tr>
			<tr>
				<td>Attacker firing from moving vehicle</td>
				<td>-2</td>
			</tr>
			<tr>
				<td>Attacker in melee combat</td>
				<td>-3</td>
			</tr>
			<tr>
				<td>Attacker running</td>
				<td>-2</td>
			</tr>
			<tr>
				<td>Attacker wounded</td>
				<td>- wound modifier</td>
			</tr>
			<tr>
				<td>Blind fire</td>
				<td>-6</td>
			</tr>
			<tr>
				<td>Called shot</td>
				<td>-4</td>
			</tr>
			<tr>
				<td>Previously aimed with Take Aim</td>
				<td>+1 Dice Pool, +1 accuracy</td>
			</tr>
			<tr>
				<td>Wireless Smartgun</td>
				<td>+1 gear, +2 implanted</td>
			</tr>
		</table>
	</div>)
}