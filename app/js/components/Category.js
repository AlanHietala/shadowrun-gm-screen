import React from 'react';
import Data from '../data/Data';
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
	}

	search(event) {
		this.setState({
			searchString: event.target.value
		});
	}

	render() {
		const { params } = this.props;
		const { category } = params;
		const categoryData = Data[category];
		const categoryChecks = categoryData
			.filter((item) => {
				return this.state.searchString === '' || item.name.toLowerCase().indexOf(this.state.searchString.toLowerCase()) > -1
			})
			.map((check) => {
			return check.testType === testTypes.OPPOSED ? <OpposedCheck check={check}/> :
				<ThresholdCheck check={check} />
		});


		return (
			<div>
				<div className="row"><input className="" onChange={this.search}/>
					<button className="btn">Clear</button>
				</div>
				<div className='row'>{categoryChecks}</div>
			</div>
		)
	}
};


export default Category;