import React from 'react';

class NavSide extends React.Component{
	render(){
		return (
            <nav className="navbar-default navbar-side" role="navigation"> 
				   <div className="sidebar-collapse"> 
				    <ul className="nav" id="main-menu"> 
				     <li> <a href=""><i className="fa fa-dashboard"></i> Dashboard</a> </li> 
				     <li> <a href=""><i className="fa fa-desktop"></i> USA</a> </li> 
				     <li> <a href=""><i className="fa fa-bar-chart-o"></i> CAN</a> </li> 
				     <li> <a href=""><i className="fa fa-qrcode"></i> PROOFING</a> </li> 
				     <li> <a href=""><i className="fa fa-table"></i> NON_WMT</a> </li> 
				     <li> <a href=""><i className="fa fa-apple"></i> Printing</a> </li> 
				     <li> <a href="" className="active-menu"><i className="fa fa-edit"></i>Daily Reminder </a> </li> 
				     <li> <a href=""><i className="fa fa-fw fa-file"></i> Other Notes</a> </li> 
				     <li> <a href="#"><i className="fa fa-sitemap "></i> Email<span className="fa arrow"></span></a> 
				      <ul className="nav nav-second-level collapse in"> 
				       <li> <a href="#">进度</a> </li> 
				       <li> <a href="#">设计</a> </li> 
				       <li> <a href="#">休假／不当值<span className="fa arrow"></span></a> 
				        <ul className="nav nav-third-level collapse"> 
				         <li> <a href="#">Third Level Link</a> </li> 
				         <li> <a href="#">Third Level Link</a> </li> 
				         <li> <a href="#">Third Level Link</a> </li> 
				        </ul> </li> 
				      </ul> </li> 
				     
				    </ul> 
				   </div> 
            </nav>
		);
	}
}
export default NavSide;