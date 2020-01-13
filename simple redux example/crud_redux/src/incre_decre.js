import React from 'react';
import { connect } from 'react-redux';
import { increment , decrement, clear } from './actions/Counter';

class IncreDecre extends React.Component{

    render(){
        let {res_counter} = this.props.result;
        return(
            <div>
                <h2 style={{textAlign:"center"}}>{res_counter}</h2>
                <div>
                    <div className="field" style={{textAlign:"center"}}>
                        <button type="submit" className="ui primary basic button"
                        onClick = {()=>this.props.increment()}>Increment</button>
                        <button type="submit" className="ui primary basic button"
                        onClick = {()=>this.props.decrement()}>Decrement</button>
                        <button type="submit" className="ui primary basic button"
                        onClick = {()=>this.props.clear()}>Clear</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        result: state.result
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: ()=>{
            dispatch(increment())
        },
        decrement: ()=>{
            dispatch(decrement())
        },
        clear: ()=>{
            dispatch(clear())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IncreDecre);