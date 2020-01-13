import React from 'react';


export default class TableData extends React.Component{
    render(){
        return(
            <div className="ui container tbaluicont">
                <div><h1>Table Data</h1></div>
                <table className="ui celled table">
                    <thead>
                        <tr>
                            <th style={{width: "10%"}}>Sr. no</th>
                            <th style={{width:" 50%"}}>Name</th>
                            <th style={{width:"40%"}}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.allValue
                            .map((value,srno) => (
                                <tr key={srno}>
                                    <td>{srno+1}</td>
                                    <td>{value}</td>
                                    <td>
                                        <div className="btnManDiv">
                                            <button className="ui positive basic button"
                                            onClick = {(e) => {this.props.updateItem(value)}}
                                            >
                                                <i className="edit outline icon"></i>
                                                Edit 
                                            </button>
                                            <button className="ui negative basic button"
                                            onClick = {(e) => {this.props.deletFun(e,value)}}
                                            >
                                                <i className="trash alternate outline icon"></i>
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}