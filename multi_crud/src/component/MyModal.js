import React from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import '../MainStyle.css';



export default class MyModal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            firstName:'',
            lastName:'',
            email:'',
            id:''
        };
    };
    
    componentDidUpdate(preveProps){
        if(preveProps.activeData !== this.props.activeData){
            this.setState({
                firstName: this.props.activeData.firstName,
                lastName: this.props.activeData.lastName,
                email: this.props.activeData.email,
                id: this.props.activeData.id
            })
        }
    }

    handleChange = (e,fieldName) => {
        this.setState({
            [fieldName]: e.target.value
        })
    }

    
    
    save = (e) => {
        e.preventDefault();
        this.props.updateItem({"id":this.state.id,"firstName":this.state.firstName,"lastName":this.state.lastName,"email":this.state.email});
        this.props.closeModal();
    }

    
        render() {
            return (
                <div>
                    <Modal show = {this.props.showModal} onHide={this.props.closeModal}>
                        <Modal.Header closeButton>
                            <Modal.Title><label style={{color:"#545454"}}>Update Id: </label> {this.props.srno}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form className="ui form" onSubmit={this.save}>
                              <div className="ui field popupField">
                                  <label>First Name</label>
                                    <input type="text" 
                                        value={this.state.firstName}
                                        onChange = {(e) => {this.handleChange(e,"firstName")}}
                                    />
                                </div>
                                <div className="ui field popupField">
                                    <label>Last Name</label>
                                    <input type="text" 
                                        value={this.state.lastName}
                                        onChange = {(e) => {this.handleChange(e,"lastName")}}
                                    />
                                </div>
                                <div className="ui field popupField">
                                    <label>Email</label>
                                    <input type="text" 
                                        value={this.state.email}
                                        onChange = {(e) => {this.handleChange(e,"email")}}
                                    />
                                </div>
                                <div className="ui field popupField" style={{textAlign:"center"}}>
                                    <button className="ui primary basic button fulWithBtn" type="submit">Change</button>
                                </div>
                            </form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className="ui negative basic button fulWithBtn" type="submit" 
                            onClick = {this.props.closeModal}
                            >Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            );
        }
}