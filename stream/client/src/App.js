import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import StreamCreate from './Streams/StreamCreate';
import StreamDelete from './Streams/StreamDelete';
import StreamEdit from './Streams/StreamEdit';
import StreamList from './Streams/StreamList';
import StreamShow from './Streams/StreamShow';
import Header from './Header';

class App extends React.Component{
  render(){
    return (
      <div className="ui container">
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={StreamList}></Route>
            <Route path="/streams/new" component={StreamCreate}></Route>
            <Route path="/streams/edit" component={StreamEdit}></Route>
            <Route path="/streams/delete" component={StreamDelete}></Route>
            <Route path="/streams/show" component={StreamShow}></Route>
          </div>
        </BrowserRouter> 
      </div>
    );
  }
}

export default App;
