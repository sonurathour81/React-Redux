import React from 'react';
import { Button } from 'react-bootstrap';
import {Modal} from 'react-bootstrap';
import './style.css';



export default class UpdateModal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            activeObject:{},
            oldName: ''
        };
    };
    componentDidUpdate(prevProps){
        if(prevProps.activeObject !== this.props.activeObject){
            
            this.setState({
                activeObject:this.props.activeObject
                // oldName: this.props.activeObject
            });
            
        }
    }

    handleChange = (e) => {
        const updatedName = e.target.value;
        this.setState((oldState) => {
            const {activeObject} = oldState;
            activeObject.name = updatedName;
            return {activeObject};
            
        })
    }

    save = (e) => {
        e.preventDefault();
        this.props.update(this.state.activeObject);
        this.props.hideModal();
    }

        render() {
            return (
                <div>
                    <Modal show={this.props.showModal} onHide={this.props.hideModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Update</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form className="ui form" onSubmit={this.save}>
                                <div className="ui field forminside">
                                    <input type="text" 
                                        value={this.state.activeObject.name}
                                        onChange = {this.handleChange}
                                    />
                                    <button className="ui primary basic button" type="submit">Change</button>
                                </div>
                            </form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className="ui negative basic button" type="submit" onClick={this.props.hideModal}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            );
        }
}