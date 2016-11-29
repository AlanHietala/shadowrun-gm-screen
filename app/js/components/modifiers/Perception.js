import React from 'react';

export default () => {
	return (
		<div>
			<h2>Perception Thresholds</h2>
			<table>
				<tr>
					<th>Item / Event Is</th>
					<th>Threshold</th>
					<th>Examples</th>
				</tr>
				<tr>
					<td>Obvious / Large / Loud</td>
					<td>1</td>
					<td>Neon sign, running crowd, yelling, gunfire</td>
				</tr>
				<tr>
					<td>Normal</td>
					<td>2</td>
					<td>Street Sign, pedestrian, conversation, silenced gunfire</td>
				</tr>
				<tr>
					<td>Obscured / Small / Muffled</td>
					<td>3</td>
					<td>Item dropped under table, contact lens, whispering</td>
				</tr>
				<tr>
					<td>Hidden / Micro / Silent</td>
					<td>4</td>
					<td>Secret door, needle in haystack, subvocal speech</td>
				</tr>
			</table>
			<h2>Perception Modifiers</h2>
			<table>
				<tr>
					<th>Situation</th>
					<th>Modifier</th>
				</tr>
				<tr>
					<td>Perceiver is distracted</td>
					<td>-2</td>
				</tr>
				<tr>
					<td>Perceiver is specificly looking / listening for it</td>
					<td>+3</td>
				</tr>
				<tr>
					<td>Object / sound not in immediate vicinity</td>
					<td>-2</td>
				</tr>
				<tr>
					<td>Object / sound far away</td>
					<td>-3</td>
				</tr>
				<tr>
					<td>Object / sound stands out in some way</td>
					<td>+2</td>
				</tr>
				<tr>
					<td>Interfering sight / odor / sound</td>
					<td>-2</td>
				</tr>
				<tr>
					<td>Perceiver has active enhancements</td>
					<td>+rating</td>
				</tr>
			</table>
		</div>
	)
}