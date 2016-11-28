import React from 'react';
export default () => {
	return (<div>
		<h2>Defense Modifier Table</h2>
		<table>
			<tr>
				<th>Situation</th>
				<th>Modifier</th>

			</tr>
			<tr>
				<td>Defender inside moving vehicle</td>
				<td>+3</td>
			</tr>
			<tr>
				<td>Defender prone</td>
				<td>-2</td>
			</tr>
			<tr>
				<td>Defender unaware of attack</td>
				<td>No Defense Possible</td>
			</tr>
			<tr>
				<td>Defender Wounded</td>
				<td>Wound Modifier</td>
			</tr>
			<tr>
				<td>Attacker has longer reach</td>
				<td>-1 per net reach</td>
			</tr>
			<tr>
				<td>Defender has longer reach</td>
				<td>+1 per net reach</td>
			</tr>
			<tr>
				<td>Defender receiving a charge</td>
				<td>+1</td>
			</tr>
			<tr>
				<td>flechette shotgun narrow spread</td>
				<td>-1</td>
			</tr>
			<tr>
				<td>flechette shotgun medium spread</td>
				<td>-3</td>
			</tr>
			<tr>
				<td>flechette shotgun wide spread</td>
				<td>-5</td>
			</tr>
			<tr>
				<td>Full auto</td>
				<td>-9</td>
			</tr>
			<tr>
				<td>long burst / full auto (simple)</td>
				<td>-5</td>
			</tr>
			<tr>
				<td>burst or semi auto burst</td>
				<td>-2</td>
			</tr>
			<tr>
				<td>defender in melee</td>
				<td>-3</td>
			</tr>
			<tr>
				<td>Defender running</td>
				<td>+2</td>
			</tr>
			<tr>
				<td>Good Cover</td>
				<td>+4</td>
			</tr>
			<tr>
				<td>Partial Cover</td>
				<td>+2</td>
			</tr>
			<tr>
				<td>area of effect attack</td>
				<td>-2</td>
			</tr>
		</table>
	</div>)
}