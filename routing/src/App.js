import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Contact from './contact';
import NavBar from './navBar';
import Overview from './overview';
import Home from './home';
import {Class1, Class2, Class3} from './checkMulCom';

export default class App extends React.Component {
    state = {
        dummy: "Hello Bro!"
    }
  render(){
    return (
        <div className="ui container">
            <div style={{margin: "25px 0px"}}>
                <h3 className="ui top attached header">
                    In a singal file multiple Component
                </h3>
                <div className="ui attached segment">
                    <Class1 />
                    <Class2 />
                    <Class3 />
                </div>
            </div>
            <Router>
                    <NavBar />
                    <Switch>
                        <div className="ui segment">
                            <Route path='/' exact={true}>
                                <Home dummy = {this.state.dummy} />
                            </Route>
                            <Route path='/contact'>
                                <Contact/>
                            </Route>
                            <Route path='/overview'>
                                <Overview/>
                            </Route>
                        </div>
                    </Switch>
            </Router>
      </div>
    );
  }
}