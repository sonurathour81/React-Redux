import React from 'react';

export default class AddButton extends React.Component{
    render(){
        return(
            <div className="mandiv">
                <form className="ui form" onSubmit={(e) => {this.props.onclickAdd(e)}}>
                    <div className="ui field forminsidenew">
                        <button className="ui primary basic button" type="submit">Add Data </button>
                    </div>
                </form>
            </div>
        )
    }
}