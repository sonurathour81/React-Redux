import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions/index';

class SongList extends React.Component{
    
    renderList(){
        return this.props.songs.map((song,index) => {
            return (
                <div className="item" style={{padding:"10px 2px"}} key = {index}>
                    <div className="content">
                        <h3 className="left floated">{song.title}</h3>
                        <div className="right floated">
                            <button className="ui inverted teal button"
                            onClick = {()=>this.props.selectSong(song)}
                            >Play</button>
                        </div>
                    </div>
                </div>
            )
        })
    }

    render(){
        return(
            <div className="ui divided list">{this.renderList()}</div>
        )
    }
}

const mapStateToProp = state => {
    console.log(state);
    
    return({songs: state.songs});
}

export default connect(mapStateToProp,{selectSong})(SongList);