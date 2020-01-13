import React from 'react';
import { connect } from 'react-redux';

import CreateForm from './CreateForm';
import Table from './Table';
import IncreDecre from './incre_decre';

class App extends React.Component {
  render(){
    return (
      <div className="ui container" style={{marginTop:"20px"}}>
        <IncreDecre/>
        <CreateForm />
        <Table value = {this.props.allvalue.user} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    allvalue: state.userData
  }
}

export default connect(mapStateToProps)(App);
