import React from 'react';
import * as css from '../../styles/main.css';
export default class ThresholdCheck extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showModifiers: false
		};
		this.toggleModifiers = this.toggleModifiers.bind(this);
	}
	toggleModifiers() {
		this.setState({
			showModifiers: !this.state.showModifiers
		})
	}
	render() {
		const {check} = this.props;
		const attackLimit = check.attack.limit ? `[${check.attack.limit}]` : '';
		const modifierIcon = this.state.showModifiers ? '-' : '+';
		const modifierTables = this.state.showModifiers ? check.modifierTables : [];
		return (<div className={ css.categoryitem }>
			<div className="row">{ check.name } - { check.testType }</div>
			<div className="row">{ check.attack.attribute } + { check.attack.skill } { attackLimit }</div>
			<div className="modifier-tables">
				<div>Modifiers <a href="#" className={css.modifiertoggle} onClick={this.toggleModifiers}>{modifierIcon}</a></div>
				<div className="modifierContent">
					{ modifierTables }
				</div>

			</div>
		</div>);

	}
}