import React from 'react';
// import ReactDOM from 'react-dom';
import '../MainStyle.css';


export default class BtnEditDel extends React.Component {
    
    
  render(){
    return (
            <div>
                <div className="btnManDiv">
                    <button className="ui positive basic button"
                    onClick = {(e)=> this.props.editbtn(this.props.xyz.id, this.props.srno+1)}
                    >
                        <i className="edit outline icon"></i>
                        Edit 
                    </button>
                    <button className="ui negative basic button"
                    onClick = {(e)=> this.props.delItem(e,this.props.xyz.id)}
                    >
                        <i className="trash alternate outline icon"></i>
                        Delete
                    </button>
                </div>
            </div>
        );
    };
};
