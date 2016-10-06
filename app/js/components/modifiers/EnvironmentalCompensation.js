import React from 'react';
export default () => {
	return (<div>
		<h2>Environmental Compensation</h2>
		<table>
			<tr>
				<th>Compensation</th>
				<th>Effect</th>
			</tr>
			<tr>
				<td>Flare Compensation</td>
				<td>Glare shift 2 rows up</td>
			</tr>
			<tr>
				<td>Image Magnification</td>
				<td>Range reduced by 1 category</td>
			</tr>
			<tr>
				<td>Low-Light Vision</td>
				<td>Treat Partial and Dim Light as Full</td>
			</tr>
			<tr>
				<td>Thermographic Vision</td>
				<td>Visibility and Light shift 1 row up</td>
			</tr>
			<tr>
				<td>Tracer Rounds</td>
				<td>Wind below light and range below short shift 1 row up</td>
			</tr>
			<tr>
				<td>Smartlink</td>
				<td>Wind shifts 1 row up</td>
			</tr>
			<tr>
				<td>Sunglasses</td>
				<td>Glare shift 1 row up, Light shifts 1 row down</td>
			</tr>
			<tr>
				<td>Ultrasound</td>
				<td>Visibility shifts 1 row up, ignore light conditions (within 50 meters)</td>
			</tr>
		</table>
	</div>)
}