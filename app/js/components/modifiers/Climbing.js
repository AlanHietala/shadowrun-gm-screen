import React from 'react';

export default () => {
	return (
		<div>
			<h2>Climbing</h2>
			<table>
				<tr>
					<th>Situation</th>
					<th>Movement Distance</th>
				</tr>
				<tr>
					<td>Assisted climbing down (rappelling)</td>
					<td>2 meters</td>
				</tr>
				<tr>
					<td>Assisted climbing upward</td>
					<td>1m per hit</td>
				</tr>
				<tr>
					<td>Assisted climbing horizontally</td>
					<td>1m per 2 hits</td>
				</tr>
				<tr>
					<td>Assisted climbing upside down (on ceiling or overhang)</td>
					<td>1m per 2 hits</td>
				</tr>
				<tr>
					<td>Unassisted climbing down</td>
					<td>1m per hit</td>
				</tr>
			</table>
			<table>
				<tr>
					<th>Situation</th>
					<th>Dice pool modifier</th>
				</tr>
				<tr>
					<td>Assisted climbing</td>
					<td>+2</td>
				</tr>
				<tr>
					<td>Easily climbable (chain-link fence)</td>
					<td>+1</td>
				</tr>
				<tr>
					<td>Broken (tree, loose stone wall)</td>
					<td>0</td>
				</tr>
				<tr>
					<td>Flat (brick wall, side of old building)</td>
					<td>-3</td>
				</tr>
				<tr>
					<td>Sheer (metal wall, seamless stone)</td>
					<td>-5</td>
				</tr>
				<tr>
					<td>slippery or wet</td>
					<td>-2</td>
				</tr>
				<tr>
					<td>Greased or gel-treated</td>
					<td>-4</td>
				</tr>
			</table>
		</div>
	)
}