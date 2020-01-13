import React from 'react';
import TableData from './TableData';
import MyModal from './MyModal';
import CreateForm from './CreateForm';
import AddButton from './AddButton';
import Loader from './Loader';
import SearchBar from './SearchBar';



class App extends React.Component{

  state = {
    allData: [],
    showModal: false,
    EmployeeId:'',
    EmployeeName:'',
    EmployeeSalary:'',
    EmployeeAge:'',
    showResults: false,
    loadershow: false,
    searchText: ''
  }

  apis = (url,method,id,obj) =>{
    if(obj){
      fetch(url,{
        method: method,
        body: JSON.stringify(obj)
      })
      .then(res => res.json())
      .then(result => {
        this.manageState(result,id,method,obj);
      })
    }else{
      fetch(url,{
        method: method
      })
      .then(res => res.json())
      .then(result => {
        this.manageState(result,id,method,obj);
        if(!result){
          this.setState({
            loadershow : false
          })
        }else{
          this.setState({
            loadershow : true
          })
        }
        
      })
    }
  }

  manageState = (result,id,method,obj) => {
    if(method === "GET"){
      this.setState({
        allData: result
      })
    }else if(method === "DELETE"){

      const temp = [...this.state.allData];
      const filter = temp.filter((temp) => {
        return temp.id !== id 
      })
      this.setState({
        allData: filter
      })
    }else if(method === "PUT"){
      const temp = [...this.state.allData];
      const updated = temp.map((val) => {
        if (val.id === id) {
          val.employee_name = obj.name;
          val.employee_salary = obj.salary;
          val.employee_age = obj.age;
        }
        return val;
     });
     this.setState({
       allData: updated
     })
    }else if(method === "POST"){
     let obj = {
       "employee_name": result.name,
       "employee_salary": result.salary,
       "employee_age": result.age,
       "id": result.id
     }
      this.setState({
        allData: [obj, ...this.state.allData],
        EmployeeName:'',
        EmployeeSalary:'',
        EmployeeAge:''
     })
    }
    return
  }

  componentDidMount(){
    const url = "http://dummy.restapiexample.com/api/v1/employees";
    this.apis(url,"GET");
  }

  updatePrdouct = (e,fullData) =>{
    this.setState({
      showModal: true,
      EmployeeId: fullData.id,
      EmployeeName: fullData.employee_name,
      EmployeeSalary: fullData.employee_salary,
      EmployeeAge: fullData.employee_age
    })
  }

  deleteProduct = (e,id) => {
    const c = window.confirm("Do you want Delete data!");
    if(c){
      const url = `http://dummy.restapiexample.com/api/v1/delete/${id}`;
      this.apis(url,"DELETE",id);
    }else{
      return
    }
    
  }

  hideModal = () => {
    this.setState({
      showModal: false
    })
  }

  getUpdateValue = (e,fieldName) => {
    this.setState({
      [fieldName]: e.target.value
    })
  }

  getUpdateValueSubmit =  (e) => {
    e.preventDefault();
    let obj = {
      "name": this.state.EmployeeName,
      "salary": this.state.EmployeeSalary,
      "age": this.state.EmployeeAge
    }
    this.setState({
      showModal: false
    })
    const url = `	http://dummy.restapiexample.com/api/v1/update/${this.state.EmployeeId}`;
    this.apis(url,"PUT",this.state.EmployeeId,obj);
  }


  createOnSubmit = (e,objValue) => {
    e.preventDefault();
    const url = `http://dummy.restapiexample.com/api/v1/create`;
    this.apis(url,"POST",this.state.EmployeeId,objValue);
    this.setState({
      showResults: false
    })
  }


  onclickAdd = (e) => {
    e.preventDefault();
    this.setState({
      showResults: true
    })
  }
  closebtndiv = () => {
    this.setState({
      showResults: false
    })
  }

  searchText = (e,searchText) => {
    this.setState({
      searchText : searchText
    })
  }

  sortingfun = (e,order) => {
    const sorted = this.state.allData.sort((a,b)=>{
        let val1 = a.employee_name.toLowerCase();
        let val2 = b.employee_name.toLowerCase();
        if(order === "ascending"){
            return (val1 < val2 ? -1 : 1)
        }else if(order === "dscending"){
            return (val1 < val2 ? 1 : -1)
        }
        return 0;
      })
      this.setState({
        allData: sorted
      })

}



render(){
  return (
    <div>
        {
          this.state.showResults ?
          null : <div className="ui container tbaluicont">
            <AddButton
            onclickAdd = {this.onclickAdd}
            />
        </div> 
        }
      
        {
          this.state.showResults ? 
          <div className="ui container tbaluicont" style={{paddingTop: "7px"}}>
            <div className="cosebtn">
              <i className="times circle outline icon" onClick = {this.closebtndiv}></i>
            </div>
            <CreateForm 
            addDataButton = {this.state.addDataButton}
            createOnSubmit = {this.createOnSubmit}
            />
          </div> : null
        }
        <div className="ui container tbaluicont" >
          <SearchBar 
          searchText = {this.searchText}
          />
        </div>

      <div className="ui container tbaluicont" >
        {
          this.state.loadershow ? null : <Loader />
        }
        

        <TableData 
        allData = {this.state.allData}
        deleteProduct = {this.deleteProduct}
        updatePrdouct = {this.updatePrdouct}
        searchText = {this.state.searchText}
        sortingfun = {this.sortingfun}

        >
        </TableData>
        <MyModal 
        showModal = {this.state.showModal}
        hideModal = {this.hideModal}
        EmployeeName = {this.state.EmployeeName}
        EmployeeSalary = {this.state.EmployeeSalary}
        EmployeeAge = {this.state.EmployeeAge}
        getUpdateValue = {this.getUpdateValue}
        getUpdateValueSubmit = {this.getUpdateValueSubmit}
        />
      </div>
    </div>
    );
  }
}

export default App;
