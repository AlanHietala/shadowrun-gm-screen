import React from 'react';
import { Link, browserHistory } from 'react-router'
function AppLayout({children}) {

	return (
		<div>
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
						<a className="navbar-brand" onClick={() => {browserHistory.push('/meat')}}>
							Shadowland 2.0
						</a>
					</div>
					<ul className="nav navbar-nav">
						<li><Link to="/meat">Meat</Link></li>
						<li><Link to="/matrix">Matrix</Link></li>
						<li><Link to="/social">Social</Link></li>
						<li><Link to="/combat">Combat Sequence</Link></li>
					</ul>
				</div>
			</nav>
			<div className="container">{children}</div>
		</div>
	)

}

export default AppLayout;