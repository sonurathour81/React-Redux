import React from 'react';
import './style.css';

export default class Search extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            searchText: ''
        };
    }

    search = (e) =>{
        this.setState({
            searchText: e.target.value },
            () => {this.props.search(this.state.searchText)}
        // console.log(this.state.searchText);
        
    )
}

   

    render(){
        // console.log(this.props.searchFor);
        
        return(
        <div className="mandiv">
            <div className="ui container">
                <form className="ui form" >
                    {/* {
                        this.props.searchFor
                    } */}
                    <div className="ui field forminside">
                        <input type="text" placeholder="Serch Here.." onChange={this.search} />
                    </div>
                </form>
            </div>
        </div>
        );
    }
}