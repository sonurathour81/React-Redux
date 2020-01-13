import React from 'react';
import './style.css';
import Xyz from './Xyz';

export default class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      allData:[],
    }
  }

  apis = (method,query,id) => {
   return fetch(query,{
    method: method
   })
   .then(response => response.json())
   .then(result =>{
      // console.log(result)
      this.manageState(result,id,method)
    }
   )
  }

  manageState = (updateData,id,method) => {
    if(method === "GET"){
      this.setState({
        allData: updateData
      })
    }else if(method === "DELETE"){
      const deletedData = this.state.allData.filter((deletedData)=>{
        return deletedData.id !== id;
      })
      this.setState({
        allData: deletedData
      })
    }
  }

  componentDidMount(){
    const query ='https://jsonplaceholder.typicode.com/posts';
    this.apis("GET",query);
  }

  deleteProduct = (e,id) => {
    e.preventDefault();
    let query = `https://jsonplaceholder.typicode.com/posts/${id}`
    this.apis("DELETE",query,id);
  }


  render(){
    return (
      <div className="ui container tbaluicont">
        <table className="ui celled table">
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Id</th>
              <th>Title</th>
              <th>Body</th>
              <th>UserId</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {
          this.state.allData
          .map((name,index)=>{
            return <tr key = {name.id}>
              <td>{index+1}</td>
              <td>{name.id}</td>
              <td>{name.title}</td>
              <td>{name.body}</td>
              <td>{name.userId}</td>
              <td>
                  <div className="btnManDiv">
                      <button className="ui twitter button"
                      onClick={()=>this.props.edit(name.uuid)}
                      >
                          Edit 
                      </button>
                      <button className="ui google plus button"
                      onClick={(e)=>this.deleteProduct(e,name.id)}
                      >
                          Delete
                      </button>
                  </div>
              </td>
            </tr>
          })
        }
          </tbody>
        </table>
        
        <div><Xyz /></div>

      </div>
    );
  }
}
