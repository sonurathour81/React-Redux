import React from 'react';

export default class Loader extends React.Component{
    render(){
        return(
            <div className="ui segment" style={{height: "100vh",
                width: "100%"}}>
                <div className="ui active inverted dimmer">
                    <div className="ui large text loader">Data is Loading...</div>
                </div>
            </div>
        )
    }
}