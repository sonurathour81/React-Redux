import React from 'react';
import { Button,Modal } from 'react-bootstrap';

class MyModal extends React.Component{


    render(){
        return(
            <div>
                <Modal show={this.props.modalShow} onHide={this.props.hidemodal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Data</Modal.Title>
                    </Modal.Header>
                        <Modal.Body>
                            <div>
                                <form className="ui form" onSubmit = {(e) => {this.props.getUpdateValueSubmit(e)}}>
                                    <div className="field">
                                        <label>Name</label>
                                        <input type="text" 
                                        value = {this.props.name}
                                        onChange = {(e) => {this.props.getUpdateValue(e,"name")}}
                                        />
                                    </div>
                                    <div className="field">
                                        <label>Age</label>
                                        <input type="text" 
                                        value = {this.props.age}
                                        onChange = {(e) => {this.props.getUpdateValue(e,"age")}}
                                        />
                                    </div>
                                    <div className="field" style={{textAlign:"right"}}>
                                        <button type="submit" className="ui primary basic button">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </Modal.Body>
                    <Modal.Footer>
                        <Button className="ui secondary basic button" onClick={this.props.hidemodal}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default MyModal;