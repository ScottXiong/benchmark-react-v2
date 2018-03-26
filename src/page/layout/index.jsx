import React from 'react';

import NavTop from 'component/nav-top/index.jsx'
import NavSide from 'component/nav-side/index.jsx'

import './index.css'
class Layout extends React.Component{
	render(){
		return (
            <div className="wrapper">
            	<NavTop />
            	<NavSide />
            	{this.props.children}
            </div>
		);
	}
}
export default Layout;