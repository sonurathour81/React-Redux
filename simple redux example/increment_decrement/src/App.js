import React from 'react';
import { connect } from 'react-redux';

import { increment, decrement, add, sub, mul, div, mod } from './actions/increDecreAction';

class App extends React.Component{

  state = {
    first:'',
    second:''
  }
  onchnageHandle = (e,fieldName) => {
    e.preventDefault();
    this.setState({
      [fieldName]: Number(e.target.value)
    })
  }

  render(){
    const first = this.state.first;
    const second = this.state.second;

    return (
      <div className="ui container" style={{textAlign:"center", marginTop: "20px"}}>
        <div className="ui form">
          <div className="field">
            <div className="two fields">
              <div className="field">
                <input type="text" placeholder="First Value" value={this.state.first} onChange= {(e) => {this.onchnageHandle(e,"first")}} />
              </div>
              <div className="field">
                <input type="text" placeholder="Second Value" value={this.state.second} onChange= {(e) => {this.onchnageHandle(e,"second")}} />
              </div>
            </div>
          </div>
        </div>

        <h2>{this.props.count}</h2>

        <button className="ui primary basic button" onClick ={() => this.props.add(first,second)}>Add</button>
        <button className="ui primary basic button" onClick ={() => this.props.sub(first,second)}>Sub</button>
        <button className="ui primary basic button" onClick ={() => this.props.mul(first,second)}>Mul</button>
        <button className="ui primary basic button" onClick ={() => this.props.div(first,second)}>Div</button>
        <button className="ui primary basic button" onClick ={() => this.props.mod(first,second)}>Mod</button>

        <button className="ui primary basic button" onClick ={() => this.props.increment()}>Increment By 1</button>
        <button className="ui primary basic button" onClick ={() => this.props.decrement()}>Decrement By 1</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: (first,second) =>{
      dispatch(add(first,second))
    },
    sub: (first,second) =>{
      dispatch(sub(first,second))
    },
    mul: (first,second) =>{
      dispatch(mul(first,second))
    },
    div: (first,second) =>{
      dispatch(div(first,second))
    },
    mod: (first,second) =>{
      dispatch(mod(first,second))
    },
    increment: () =>{
      dispatch(increment())
    },
    decrement: () =>{
      dispatch(decrement())
    },
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
