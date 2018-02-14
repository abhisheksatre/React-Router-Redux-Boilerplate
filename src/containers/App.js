import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Redirect, Link} from 'react-router-dom';

import { saveName } from './../actions/index';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {title: 'Test'};
  }

  setUserName(){
    const name = this.refs.username.value.trim();
    this.props.saveName(name);    
  }

  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <div className="reduxdemo">
            Redux Demo
            <input type="text" ref="username" placeholder="name"/>
            <br/>
            <button onClick={this.setUserName.bind(this)}>Add Name</button>
            <div>{this.props.name}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    name: state.name,
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators(
    {
      saveName
    }
    ,dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(App);
