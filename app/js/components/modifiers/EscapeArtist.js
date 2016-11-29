import React from 'react';

export default () => {
	return (
		<div>
			<h2>Escape Artist</h2>
			<table>
				<tr>
					<th>Restraints</th>
					<th>Threshold</th>
				</tr>
				<tr>
					<td>Rope, plastic cuffs</td>
					<td>2</td>
				</tr>
				<tr>
					<td>Metal handcuffs</td>
					<td>3</td>
				</tr>
				<tr>
					<td>Straight jacket</td>
					<td>4</td>
				</tr>
				<tr>
					<td>Reinforced material</td>
					<td>+1</td>
				</tr>
			</table>
			<table>
				<tr>
					<th>Situation</th>
					<th>Modifier</th>
				</tr>
				<tr>
					<td>Character being watched</td>
					<td>-2</td>
				</tr>
				<tr>
					<td>Character being restrained</td>
					<td>- Restrainer's strength</td>
				</tr>
				<tr>
					<td>Character has picks or cutting implement</td>
					<td>+2</td>
				</tr>
			</table>
		</div>
	)
}