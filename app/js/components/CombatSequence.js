import React from 'react';

export default () => {

	return (<div>
			<h1>Combat Sequence</h1>
			<ul>
				<li>Attack: COMBAT_SKILL + ATTRIBUTE +- MODIFIER [LIMIT]</li>
				<li>Defend:
					<ul>
						<li>REACTION + INTUITION</li>
					</ul>
				</li>
				<li>Add attack net hits to DV of weapon</li>
				<li>Physical: DV + Net Hits &gt; Modified Armor value</li>
				<li>Grazing: DV + Net Hits = Modified Armor value</li>
				<li>Stun: DV + Net Hits &lt; Modified Armor value</li>
				<li>Roll Soak BODY + ARMOR - WEAPON AP</li>

			</ul>
		</div>
	)
}