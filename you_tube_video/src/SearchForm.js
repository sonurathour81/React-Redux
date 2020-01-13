import React from 'react';

export default class SearchForm extends React.Component {
  state = {
    searchValue:''
  }

  onchnageHandle = (e) =>{
    e.preventDefault()
    this.setState({
      searchValue: e.target.value
    })
  }

  save = (e) => {
    e.preventDefault();
    console.log("Sealsdfj Form   ",this.state.searchValue);
    this.props.getSearchData(this.state.searchValue);
    
  }

  render(){
    return (
      <div className="ui segment">
          <form className="ui form" onSubmit = {this.save} >
              <div className="field">
                  <label>Search Videos</label>
                  <div className="crtFrom">
                      <input type="text" 
                      required 
                      placeholder="Search here..."
                      value = {this.state.searchValue}
                      onChange = {this.onchnageHandle}
                      />
                  </div>
              </div>
          </form>
      </div>
    );
  }
}