import React from 'react';
import { connect } from 'react-redux';
import { deleteItem } from './actions/Delete';
import { updateItem } from './actions/Update';
import MyModal from './MyModal';

class Table extends React.Component {

  state = {
    modalShow: false,
    selectId: '',
    name:'',
    age:''
  }

  deleteItemVal = (indx) => {
    const temp = [...this.props.value];
    const filteredValue = temp.filter((val,index)=>{
      return index !== indx
    })
    this.props.deleteItem(filteredValue)
  }

  updateItemVal = (val,indx) => {
    this.setState({
      modalShow: true,
      selectId: indx,
      name: val.name,
      age: val.age
    })
  }


  getUpdateValue = (e,fieldName) => {
      this.setState({
          [fieldName]: e.target.value
      })
  }


  getUpdateValueSubmit = (e) => {
      e.preventDefault();
      this.setState({
        modalShow: false
      })
      const updavalue = {"name":this.state.name,"age":Number(this.state.age), "id": this.state.selectId};
      this.props.updateItem(updavalue)

  }

  hidemodal = () => {
    this.setState({
      modalShow: false
    })
  }

  render(){
    return (
      <div className="">
          <table className="ui celled table">
              <thead>
                  <tr>
                      <th>Sr. No.</th>
                      <th>Name</th>
                      <th>Age</th>
                      <th>Actions</th>
                  </tr>
              </thead>
              <tbody>
                {
                    this.props.value.map((val,indx)=>{ 
                        return(
                            <tr key = {indx}>
                                <td>{indx+1}</td>
                                <td>{val.name}</td>
                                <td>{val.age}</td>
                                <td>
                                <button className="ui primary basic button" onClick = {() => this.updateItemVal(val,indx) } >Edit</button>
                                <button className="ui primary basic button" onClick = {() => this.deleteItemVal(indx) } >Delete</button>

                                </td>
                            </tr>
                        )
                    })
                }
              </tbody>
          </table>
          <MyModal
          modalShow = {this.state.modalShow}
          hidemodal = {this.hidemodal}
          name = {this.state.name}
          age = {this.state.age}
          getUpdateValue = {this.getUpdateValue}
          getUpdateValueSubmit = {this.getUpdateValueSubmit}
          />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (filteredValue) => {
      dispatch(deleteItem(filteredValue))
    },
    updateItem: (updateValue) => {
      dispatch(updateItem(updateValue))
    }
  }
}

export default connect(null,mapDispatchToProps)(Table);