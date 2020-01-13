import React from 'react';
import Pagination from "react-js-pagination";
// import "bootstrap-less";
require("bootstrap-less/bootstrap/bootstrap.less");
 
export default class TableData extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
          activePage: 15
        };
      }

    handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
      }

    render(){
        const filterValue = this.props.allData.filter((data) => {
           return this.props.searchText ? 
           (data.employee_name.toLowerCase().startsWith(this.props.searchText.toLowerCase())) || (data.employee_salary.startsWith(this.props.searchText)) || (data.employee_age.startsWith(this.props.searchText)) : true 
        })
        return(
            <div>
                <Pagination
                activePage={this.state.activePage}
                itemsCountPerPage={10}
                totalItemsCount={450}
                pageRangeDisplayed={10}
                onChange={this.handlePageChange}
                />
                <div style={{textAlign:"right"}}>
                    <div className="ui large buttons">
                        <button className="ui button" onClick={(e) => this.props.sortingfun(e,"ascending")}>Ascending</button>
                        <div className="or"></div>
                        <button className="ui button" onClick={(e) => this.props.sortingfun(e,"dscending")}>Descending</button>
                    </div>
                </div>
                <table className="ui celled table">
                    <thead>
                    <tr>
                        <th>Sr. No.</th>
                        <th>Id</th>
                        <th>Employee Name</th>
                        <th>Employee Salary</th>
                        <th>employee Age</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                        filterValue.map((name,index)=>{
                        return <tr key = {name.id}>
                            <td>{index+1}</td>
                            <td>{name.id}</td>
                            <td>{name.employee_name}</td>
                            <td>{name.employee_salary}</td>
                            <td>{name.employee_age}</td>
                            <td>
                                <div className="btnManDiv">
                                    <button className="ui twitter button"
                                    onClick={(e)=>this.props.updatePrdouct(e,name)}
                                    >
                                        Edit 
                                    </button>
                                    <button className="ui google plus button"
                                    onClick={(e)=>this.props.deleteProduct(e,name.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                        })
                    }
                </tbody>
            </table>
          </div>
        )
    }
}