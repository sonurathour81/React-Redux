import React from 'react';
import { Button,Modal } from 'react-bootstrap';

class MyModal extends React.Component{
    render(){
        return(
            <div>
                <Modal show={this.props.showModal} onHide={this.props.hideModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Data</Modal.Title>
                    </Modal.Header>
                        <Modal.Body>
                            <div>
                                <form className="ui form" onSubmit = {(e) => {this.props.getUpdateValueSubmit(e)}}>
                                    <div className="field">
                                        <label>Employee Name</label>
                                        <input type="text" 
                                        value = {this.props.EmployeeName}
                                        onChange = {(e) => {this.props.getUpdateValue(e,"EmployeeName")}}
                                        />
                                    </div>
                                    <div className="field">
                                        <label>Employee Salary</label>
                                        <input type="text" 
                                        value = {this.props.EmployeeSalary}
                                        onChange = {(e) => {this.props.getUpdateValue(e,"EmployeeSalary")}}
                                        />
                                    </div>
                                    <div className="field">
                                        <label>Employee Age</label>
                                        <input type="text" 
                                        value = {this.props.EmployeeAge}
                                        onChange = {(e) => {this.props.getUpdateValue(e,"EmployeeAge")}}
                                        />
                                    </div>
                                    <div className="field" style={{textAlign:"right"}}>
                                        <button type="submit" className="ui primary basic button">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </Modal.Body>
                    <Modal.Footer>
                        <Button className="ui secondary basic button" onClick={this.props.hideModal}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default MyModal;