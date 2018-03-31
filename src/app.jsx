import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router, Route, Link, Redirect,Switch,NavLink} from 'react-router-dom'




// import 'font-awesome/css/font-awesome.min.css';
// import './index.css';
// import './index.scss';


//import component

import Layout from 'page/layout/index.jsx'
import Usa_flow from 'component/usa-flow/index.jsx'
import Can_flow from 'component/can-flow/index.jsx'
import Home from 'component/home/index.jsx'
//life circle

class App extends React.Component {
   render(){
    console.log('render')
    return (
        <div >     
              <Router>
                   <Layout>
                       <Switch>
                         <Route exact path='/' component={Home} />
                         <Route exact path='/usa' component={Usa_flow} />
                         <Route exact path='/can' component={Can_flow} />
                       </Switch>
                   </Layout>
              </Router>
        </div>
      )
   }
}

ReactDOM.render(
       <App/>,
    document.getElementById('app')
);
