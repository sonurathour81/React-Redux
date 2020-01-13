import React from 'react';

export default class SearchBar extends React.Component{
    state = {
        term:''
    }

    inputHandle = (e) =>{
        this.setState({
            term: e.target.value,
        })
    }
    onSubmitForm = (event) => {
        event.preventDefault()
        this.props.onSubmitCallBack(this.state.term);
    }
    

    render(){
        return(
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onSubmitForm} >
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" placeholder="Search here..."
                        value = {this.state.term}
                        onChange={this.inputHandle}
                        />
                    </div>
                </form>
            </div>
        )
    }
}