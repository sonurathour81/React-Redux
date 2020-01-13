import React from 'react';
import { connect } from 'react-redux';
import { anotherName } from './actions/anotherName';
import { addWish } from './actions/addWish';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <h2>Name is {this.props.myname}</h2>
        <h2>My wishes  is </h2>
          {this.props.mywishes.map((wish)=> {
          return <h3 key = {wish} >{wish}</h3>
          })}
          <button onClick={()=>{this.props.changeName()}}>Change Name</button>
          <button onClick={()=>{this.props.addWish()}}>Add Wish</button>
      </div>
    );
};
};

const mapStateToProps = (state) => {
  return{
    myname: state.name,
    mywishes: state.wish
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeName: () => {
      dispatch(anotherName())
    },
    addWish: () => {
      dispatch(addWish())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
