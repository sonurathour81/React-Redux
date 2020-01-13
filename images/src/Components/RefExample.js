import React from 'react';

export default class RefExample extends React.Component{
    onSubmitForm = (event) => {
        event.preventDefault();
        // let xyz = this.refs.abc.name;
        console.log()
    }
    render(){
        return(
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onSubmitForm} >
                    <div className="field">
                        <label>Ref Example</label>
                        <input type="text"  placeholder="Search here..." ref="abc" name="aal;sdkjfa;lsdfkjal;dsfkj" />
                    </div>
                </form>
            </div>
        )
    }
}