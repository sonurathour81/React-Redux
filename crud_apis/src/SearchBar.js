import React from 'react';

export default class SearchBar extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            searchText: ''
        };
    }

    search = (e) =>{
        this.setState({
            searchText: e.target.value },
            () => {this.props.searchText(e,this.state.searchText)}
        )
    }

   

    render(){
        return(
        <div className="mandiv">
            <form className="ui form" >
                <div className="ui field forminside">
                    <input type="text" placeholder="Serch Here.." onChange={this.search} />
                </div>
            </form>
        </div>
        );
    }
}