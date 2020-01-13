import React from 'react';
import _ from 'lodash';
import './style.css';


class TableData extends React.Component{
    

    deleteBulkData = () => {
      this.props.empData.map((val,index) => {
          if(index > 10){
              fetch(`http://dummy.restapiexample.com/api/v1/delete/${val.id}`,
              { method:"DELETE" })
              .then(res=>res.json()).then(r=>console.log(r,'rrrrrr'))
          }
      })
  }

    render(){
    const transform = _.map(this.props.getValue, (val, key) => {
        return {...val, key};
    })
    const filtered = _.filter(transform,(val,key) => (this.props.searchFor ? 
        val.name.startsWith(this.props.searchFor) || 
        val.lastName.startsWith(this.props.searchFor) : true ));

        return(
            <div className="ui container tbaluicont">
                <p onClick={()=>this.deleteBulkData()}>Delete 400</p>
                <div><h1>Table Data</h1></div>
                <table className="ui celled table">
                    <thead>
                        <tr>
                            <th style={{width: "8%"}}>Sr. no</th>
                            <th style={{width:" 26%"}}>Name</th>
                            <th style={{width:"26%"}}>Last Name</th>
                            <th style={{width:"40%"}}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                _.map(filtered,(name,id) => (
                                    <tr key={id}>
                                        <td>{id+1}</td>
                                        <td>{name.name}</td>
                                        <td>{name.lastName}</td>
                                        <td>
                                            <div className="btnManDiv">
                                                <button className="ui twitter button"
                                                onClick={()=>this.props.edit(name.key,filtered)}
                                                >
                                                    <i className="edit outline icon"></i>
                                                    Edit 
                                                </button>
                                                <button className="ui google plus button"
                                                onClick={(e)=>this.props.deleteProduct(name.key,filtered)}
                                                >
                                                    <i className="trash alternate outline icon"></i>
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    )
                                ) 
                            }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TableData;