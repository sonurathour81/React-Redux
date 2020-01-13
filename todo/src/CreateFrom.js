import React from 'react';
import './Style.css';

export default class CreateFrom extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            updateTaskval:''
        }
    }
    onSubmitForm = (event) => {
        event.preventDefault();
        let addTask = this.refs.addTask.value;
        this.props.onSubmitCallBack(addTask);
        this.refs.addTask.value = '';
    }

    onSubmitFormUpdate = (event) => {
        event.preventDefault();
        let updateTask = this.refs.updateTask.value;
        this.setState({
            updateTaskval: updateTask
        })
        this.props.xzyfdf(updateTask)
    }

    onSubmitFormSave = (e) => {
        e.preventDefault();
        console.log("update Task val     ",this.state.updateTaskval);
        this.props.xyz23(this.state.updateTaskval);
        // this.setState({
        //     updateTaskval: ''
        // })
        console.log(this.state.updateTaskval)

    }

    render(){
        return(
            <div className="ui segment">
                <form className="ui form"  >
                    <div className="field">
                        <label>Add Task</label>
                            {
                                this.props.updateVal === '' ? 
                                <div className="crtFrom">
                                    <input type="text" 
                                    required 
                                    placeholder="Search here..."
                                    ref="addTask"
                                    />
                                    <button className="ui positive basic button" onClick= {this.onSubmitForm}>Add&nbsp;Task</button>
                                </div>
                                 : 
                                 <div className="crtFrom">
                                    <input type="text" 
                                    value = {this.props.updateVal}
                                    ref="updateTask"
                                    onChange={this.onSubmitFormUpdate}
                                    required
                                    />
                                    <button className="ui positive basic button"  onClick={this.onSubmitFormSave} >Update</button>
                                </div>
                            }
                    </div>
                </form>
            </div>
        )
    }
}