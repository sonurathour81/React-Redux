import React from 'react';
import CreateFrom from './CreateFrom';
import TableData from './TableData';

export default class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      allValue:[],
      updateVal:'',
      indexUpdate:''
    }
  }

  componentDidMount(){
    const xyz = localStorage.getItem('Value')|| '[]';
    this.setState({
      allValue: JSON.parse(xyz)
    })

  }

  onSubmitCallBack = (addTask) => {
    const temp = [...this.state.allValue];
    // const uniq = 'id' + new Date().getTime() + 1 + 'id';
    temp.push(addTask);
    localStorage.setItem('Value',JSON.stringify(temp));
    this.setState({
      allValue: temp
    })
  }

  deletFun = (e,name) => {
    e.preventDefault();
    const parsedList = JSON.parse(localStorage.Value);
    const filteredArr = parsedList.filter((item)=>{
      return item !== name
    });
    localStorage.setItem('Value',JSON.stringify(filteredArr));
    this.setState({
      allValue: filteredArr
    })
  }


  updateItem = (value) => {
    const parsedList = JSON.parse(localStorage.Value);
    console.log("update funct------ ",value);
    const xyz = parsedList.findIndex((e) => e === value)
    this.setState({
      updateVal: value,
      indexUpdate: xyz
    })
  }
  
  xzyfdf =  (value) =>{
    this.setState({
      updateVal: value
    })
}
xyz23 = (newUpdateVal) =>{
    const parsedList = JSON.parse(localStorage.Value);
    parsedList[this.state.indexUpdate] = newUpdateVal
    localStorage.setItem('Value',JSON.stringify(parsedList));
    this.setState({
      allValue: parsedList
    })

}


  render(){
    return(
      <div className="ui container" style={{marginTop:"20px"}}>
        <CreateFrom 
        onSubmitCallBack = {this.onSubmitCallBack}
        updateVal = {this.state.updateVal}
        xzyfdf = {this.xzyfdf}
        xyz23 = {this.xyz23}
        />

        <TableData 
        allValue = {this.state.allValue}
        deletFun = {this.deletFun}
        updateItem = {this.updateItem}
        />
      </div>
    )
  }
}
