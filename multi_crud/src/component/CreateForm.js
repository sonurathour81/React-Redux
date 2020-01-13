import React from 'react';
import uuid from 'uuid';


export default class CreateForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fastName: '',
            lastName: '',
            email: '',
            allVal:[]
        }
    }

    inputHandl = (event,fieldName) =>{
        this.setState({
            [fieldName]: event.target.value,
            // lastName: event.target.value
        })
    }

    save = (e) =>{
        e.preventDefault();
        const temp = [...this.state.allVal];
        temp.push({'id': uuid(),"firstName": this.state.fastName,"lastName": this.state.lastName,"email": this.state.email});
        localStorage.setItem('name',JSON.stringify(temp));
        // console.log(temp);
        this.setState({
            allVal: temp,
            fastName: '',
            lastName:'',
            email:'',
        })
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.allVal.length !== this.state.allVal.length){
            this.props.passingFun(this.state.allVal)
        }

        if(prevProps.dataToBePassed.length !== this.props.dataToBePassed.length){
            this.setState({
                allVal: this.props.dataToBePassed
            })
        }

    }

    componentDidMount(){
        const list = localStorage.getItem('name') || '[]';
        this.setState({
            allVal: JSON.parse(list)
        })
    }

    render(){


        return(
            <div className="mandiv">
                <div className="ui container">
                    <form className="ui form" onSubmit={this.save}>
                        <div className="ui field forminside">
                            <input type="text" placeholder="First Name" required value = { this.state.fastName } onChange = {(e) => {this.inputHandl(e,'fastName')} } />
                            <input type="text" placeholder="Last Name" required value = { this.state.lastName } onChange = {(e) => {this.inputHandl(e,'lastName')}} />
                            <input type="email" placeholder="Email Address" required value = { this.state.email } onChange = {(e) => {this.inputHandl(e,'email')}} />
                             <button className="ui primary basic button" type="submit">Submit </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}