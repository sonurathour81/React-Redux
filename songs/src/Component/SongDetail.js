import React from 'react';
import { connect } from 'react-redux';

const SongDetail = props =>{
    console.log(props.song);

    if(!props.song){
        return <div><h2>Please Select a song!</h2></div>
    }

    return (
        <div className="ui divided list">
            <div className="ui card" style={{width:"100%"}}>
                    <img src="/giphy.gif" style={{height:"300px"}} />
                <div className="content">
                    <div className="meta">
                        <div>
                            <h2>{props.song.title}</h2>
                            <span>{props.song.duration}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = state =>{
    return { song: state.selectedSong }
};

export default connect(mapStateToProps)(SongDetail);