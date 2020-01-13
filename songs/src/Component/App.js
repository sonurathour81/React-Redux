import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';
const App = () => {
    return(
        <div className="ui container" style={{margin:"25px"}}>
            <h2 className="ui header" style={{margin: "0px"}}>Songs List</h2>
            <div className="ui section divider"></div>
            <div className="ui grid">
                <div className="ui row">
                    <div className="column eight wide">
                        <SongList />
                    </div>
                    <div className="one wide column"></div>
                    <div className="column seven wide">
                        <SongDetail />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;