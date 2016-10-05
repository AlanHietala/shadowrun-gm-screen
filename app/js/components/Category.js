import React from 'react';
import Data from '../data/Data';
import spells from '../constants/Spells';
import Spell from './Spell';
import * as testTypes from '../constants/TestTypes';
import OpposedCheck from './OpposedCheck';
import ThresholdCheck from './ThresholdCheck';

class Category extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchString: ''
		};
		this.search = this.search.bind(this);
		this.clear = this.clear.bind(this);
	}
	clear(event) {
		this.setState({
			searchString: ''
		});
	}

	search(event) {
		this.setState({
			searchString: event.target.value
		});
	}

	render() {
		const { params } = this.props;
		const category = this.props.route.path.substring(1);
		const categoryData = category === 'spells' ? spells : Data[category];
		const categoryChecks = categoryData
			.filter((item) => {
				return this.state.searchString === '' || item.name.toLowerCase().indexOf(this.state.searchString.toLowerCase()) > -1
			})
			.map((check) => {
			if(check.testType === testTypes.OPPOSED) {
				return <OpposedCheck key={check.name} check={check}/>
			} else if (check.testType === testTypes.THRESHOLD) {
					return <ThresholdCheck key={ check.name } check={ check } />
			} else if (check.spellCategory) {
				return <Spell key={ check.name } check={ check } />
			} else {
				return (<div>unknown category type</div>)
			}

		});


		return (
			<div>
				<div className="row"><input className="" placeholder="Filter" value={ this.state.searchString } onChange={this.search}/>
					<button className="" onClick={ this.clear }>Clear</button>
				</div>
				<div className='category-container'>{categoryChecks}</div>
			</div>
		)
	}
};


export default Category;