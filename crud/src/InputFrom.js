import React from 'react';
// import ReactDOM from 'react-dom';
import './style.css';



class InputForm extends React.Component{
constructor(props){
    super(props);
    this.state = {
        inputVal1: '',
        inputVal2: '',
    };
    
};

inputHandl = (event, fieldName) =>{
    this.setState({ 
        [fieldName]: event.target.value
    });
};


save = (event) =>{
    event.preventDefault();
    this.props.addUser({name: this.state.inputVal1, lastName: this.state.inputVal2});
    this.setState({
        inputVal1: '',
        inputVal2: ''
    })
}

    render(){
        return(
        <div className="mandiv">
            <div className="ui container">
                <form className="ui form" onSubmit={this.save}>
                    <div className="ui field forminside">
                        <input type="text" placeholder="First Name" required value = { this.state.inputVal1 } onChange = {(e) => this.inputHandl(e, 'inputVal1')} />
                        <input type="text" placeholder="Last Name" required value = { this.state.inputVal2 } onChange = {(e) => this.inputHandl(e, 'inputVal2')} />
                        <button className="ui primary basic button" type="submit">Submit </button>
                    </div>
                </form>
            </div>
        </div>
        );
    };
};

export default InputForm;