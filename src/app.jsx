import React from 'react';
import ReactDOM from 'react-dom';

import {HashRouter as Router, Route, Link, Redirect,Switch} from 'react-router-dom'

// import 'font-awesome/css/font-awesome.min.css';
// import './index.css';
// import './index.scss';


//import component

import Home from 'page/home/index.jsx'
import School from 'page/school/index.jsx'
//life circle

class App extends React.Component {
   constructor(props){
    super(props)
    this.state={
      data:"old state"
    }
     console.log('初始化数据，constructor')
    }
   //组件渲染前，可以放一些一步的回调
   componentWillMount() {
     console.log('componentWillMount');
   };
   //组件加载完成
   componentDidMount() {
     console.log('componentDidMount')
   }
   componentWillReceiveProps() {
     console.log('componentWillReceiveProps')
   }
   //组件是否需要更新，有返回值默认为true，只要数据变化，就更新
   shouldComponentUpdate() {
     console.log('shouldComponentUpdate')
     return true;
   }
   //组件将要更新
   componentWillUpdate() {
     console.log('componentWillUpdate')
   }
   //组件更新完成
   componentDidUpdate() {
     console.log('componentDidUpdate')
   }
   onClickHandle(){
    console.log('更新数据：')
    this.setState({
      data:"new state"
    })
   }
   render(){
    console.log('render')
    return (
        <div className="container">
          <h3>hello world <i className="fa fa-apple"></i></h3>
          
          <a href="#/home" style={{marginRight:'5px'}}>home</a>
          <a href="#/school">school</a>
          <Router>

             <Switch>
               <Route path='/' exact component={Home}/>
               <Route path='/school' component={School}/>
               <Redirect path='*' to="/"/>
             </Switch>

          </Router>


          <button onClick={()=>{this.onClickHandle()}} className='btn btn-primary'>更新state</button>&nbsp;<i className="fa fa-spinner fa-pulse fa-lg"></i>
        </div>
      )
   }
}
ReactDOM.render(
       <App/>,
    document.getElementById('app')
);
