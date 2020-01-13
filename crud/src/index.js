Fimport React from 'react';
import ReactDOM from 'react-dom';
import InputFrom from './InputFrom';
import TableData from './TableData';
import UpdateModal from './UpdateModal';
import uuid from 'uuid4';
import Search from './Search';
import './style.css';
import firebase from './credentials';

class App extends React.Component{

constructor(props){
  super(props);
  this.state= {
    showModal: false,
    searchFor: '',
    getValue:[]
  }
}


handleSubmit = (name) => {
  const database = firebase.database().ref('crud');
  database.push({'name': name.name, 'lastName': name.lastName, 'uuid':uuid()})
}

getValueFromFireBase = () => {
  const database = firebase.database().ref('crud');
  database.on("value", (snapshot) => {
    return this.setState({
      getValue: snapshot.val()
    })
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
}

componentDidMount(){
  this.getValueFromFireBase();
}

edit= (uuid,allValFireBase) =>{  
  const found = allValFireBase.find((nameobj) => nameobj.key === uuid);
  this.setState({
    showModal: true,
    activeItem : found,
    updateIdIs: uuid
  });
}

updateProduct = (activeObject) => {
  let userRef = firebase.database().ref(`crud/${this.state.updateIdIs}`);
  userRef.update(activeObject)
}

deleteProduct = (uuid,allValFireBase) => {
  let userRef = firebase.database().ref(`crud/${uuid}`);
  userRef.remove()
  this.getValueFromFireBase();
}

hideModal= () => {
  this.setState({showModal: false});
}

search = (searchName) => {
  this.setState({ searchFor: searchName});
}

  render(){
    return (
      <div>
        <InputFrom 
          addUser ={this.handleSubmit}
        />
        <Search search = {this.search}
        />
        <TableData
        searchFor = {this.state.searchFor} 
        edit = {this.edit}
        deleteProduct={this.deleteProduct}
        getValue={this.state.getValue}
        />
        <UpdateModal 
          showModal = {this.state.showModal}
          hideModal = {this.hideModal}
          activeObject = {this.state.activeItem}
          activeItem = {this.state.activeItem}
          update = {this.updateProduct}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />,document.querySelector('#root'));
