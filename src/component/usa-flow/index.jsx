import React from 'react';
import Draft from './draft/index.jsx'

import {BrowserRouter as Router, Route, Link, Redirect,Switch,NavLink} from 'react-router-dom'


class Usa_flow extends React.Component{
	render(){
		return (
            <div id="page-wrapper">
	            <div id="page-inner">
		            <div className="page-header">
		                <h2 >业务流程<small>USA</small></h2>
						<NavLink to='/usa-draft'>初稿</NavLink>
	                </div>
	                <Router>
	                	<Switch>
	                		<Route path='/usa-draft' component={Draft} />
	                	</Switch>
	                </Router>
		            
	            </div>
            </div>
		);
	}
}
export default Usa_flow;