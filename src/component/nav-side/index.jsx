import React from 'react';
import {NavLink} from 'react-router-dom';

class NavSide extends React.Component{
	constructor(props){
    super(props)
    this.state={
      data:"old state"
    }
    console.log($)
     console.log('初始化数据，constructor')
    }
    onClassChange(){
    	alert(1)
    	$('.nav-second-level').addClass('in')
    }
	render(){
		return (
            <nav className="navbar-default navbar-side" role="navigation"> 
				   <div className="sidebar-collapse"> 
				    <ul className="nav" id="main-menu"> 
				     <li> <NavLink to=""><i className="fa fa-dashboard"></i> Dashboard</NavLink> </li> 
				     <li> <NavLink to="/usa" activeClassName="active-menu"><i className="fa fa-desktop"></i> USA</NavLink> </li> 
				     <li> <NavLink to="/can" activeClassName="active-menu"><i className="fa fa-bar-chart-o"></i> CAN</NavLink> </li> 
				     <li> <NavLink to="/proofing" activeClassName="active-menu"><i className="fa fa-qrcode"></i> PROOFING</NavLink> </li> 
				     <li> <NavLink to="/non_wmt" activeClassName="active-menu"><i className="fa fa-table"></i> NON_WMT</NavLink> </li> 
				     <li> <NavLink to="/print" activeClassName="active-menu"><i className="fa fa-apple"></i> Printing</NavLink> </li> 
				     <li> <NavLink to="/reminder" activeClassName="active-menu" ><i className="fa fa-edit"></i>Daily Reminder </NavLink> </li> 
				     <li> <NavLink to="/notes" activeClassName="active-menu"><i className="fa fa-fw fa-file"></i> Other Notes</NavLink> </li> 
				     <li> <NavLink to="/email" activeClassName="active-menu" ><i className="fa fa-envelope " ></i> Email</NavLink> 
					      
				      </li> 
				     
				    </ul> 
				   </div> 
            </nav>
		);
	}
}
export default NavSide;