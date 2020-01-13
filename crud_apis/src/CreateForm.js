import React from 'react';
// import { Button,Modal } from 'react-bootstrap';


export default class CreateForm extends React.Component{

    state = {
        EmployeeName:'',
        EmployeeSalary:'',
        EmployeeAge:''
    }

    inputHandl = (e,fieldName) =>{
        this.setState({
            [fieldName]: e.target.value
        })
    }

    handlformsubmit = (e) =>{
        e.preventDefault();
        const objValue = {
            "name": this.state.EmployeeName,
            "salary": this.state.EmployeeSalary,
            "age": this.state.EmployeeAge,
        }
        this.setState({
            EmployeeName:'',
            EmployeeSalary:'',
            EmployeeAge:''
        })
       this.props.createOnSubmit(e,objValue)
    }

    render(){
        
        return(
                <div className="mandiv">
                    <div className="ui container">
                        <form className="ui form" onSubmit={(e) => {this.handlformsubmit(e)}}>
                            <div className="ui field forminside">
                                <input type="text" placeholder="Employee Name" required value = { this.state.EmployeeName } onChange = {(e) => {this.inputHandl(e,'EmployeeName')} } />
                                <input type="number" placeholder="Employee Salary" required value = { this.state.EmployeeSalary } onChange = {(e) => {this.inputHandl(e,'EmployeeSalary')}} />
                                <input type="number"  placeholder="Employee Age" required value = { this.state.EmployeeAge } onChange = {(e) => {this.inputHandl(e,'EmployeeAge')}} />
                                <button className="ui primary basic button" type="submit">Submit </button>
                            </div>
                        </form>
                    </div>
                </div>
        )
    }
}