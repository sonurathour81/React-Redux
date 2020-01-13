import React from 'react';
import { connect } from 'react-redux';
import { create } from './actions/Create';
  
class CreateForm extends React.Component{

    state = {
        name:'',
        age:''
      }

      onchnageHandle = (e,fieldName) => {
        e.preventDefault();
        this.setState({
            [fieldName]: e.target.value
        })
      }

      handlesubmit = (e)=>{
        e.preventDefault();
        const formVal = {"name":this.state.name,"age":Number(this.state.age) };
        this.props.create(formVal);
        this.setState({
            name: '',
            age: ''
        })

      }

    render(){
        
        return(
            <div style={{marginTop:"20px"}}>
                <form className="ui form" onSubmit = {(e)=>{this.handlesubmit(e)}}>
                    <div className="field">
                        <div className="three fields">
                            <div className="field">
                                <input type="text" placeholder="Name" required value={this.state.name} onChange= {(e) => {this.onchnageHandle(e,"name")}} />
                            </div>
                            <div className="field">
                                <input type="text" placeholder="Age" required value={this.state.age} onChange= {(e) => {this.onchnageHandle(e,"age")}} />
                            </div>
                            <div className="field">
                            <button className="ui primary basic button" >Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        create: (obj)=>{
            dispatch(create(obj))
        }
    }
}

export default connect(null,mapDispatchToProps)(CreateForm);