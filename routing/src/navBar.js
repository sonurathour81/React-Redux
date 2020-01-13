import React from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component {
  render(){
    return (
      <div>
        <div className="ui pointing menu">

          <Link className="item active" to="/"> Home </Link>
          <Link className="item" to="/contact"> Contact </Link>
          <Link className="item" to="/overview"> Overview </Link>

          <div className="right menu">
            <div className="item">
              <div className="ui transparent icon input">
                <input type="text" placeholder="Search..." />
                <i className="search link icon"></i>
              </div>
            </div>
          </div>
      </div>
    </div>
        
    );
  }
}