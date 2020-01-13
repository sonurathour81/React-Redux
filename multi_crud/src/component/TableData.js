import React from 'react';
import BtnEditDel from './BtnEditDel';
import MyModal from './MyModal';


export default class TableData extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showModal: false,
            activeItem:'',
            srno:''
        }
    }

// Delete Function

deleteFun = (e,id) => {
    const parsedList = JSON.parse(localStorage.name);
    const filteredArray = parsedList.filter((item) =>{
        return item.id !== id
    });
    localStorage.setItem('name',JSON.stringify(filteredArray));
    this.props.passingFun(filteredArray);

}

hideModal = () =>{
    this.setState({
        showModal: false
    })
}

edit = (id,srno) =>{
    let parsedList = JSON.parse(localStorage.getItem('name'));
    const findData = parsedList.find((name) => (name.id === id));
    this.setState({
        showModal: true,
        activeItem: findData,
        srno: srno
    })
}

updateItem = (value) => {
    const element = [...this.props.dataToBePassed];
    const updated = element.map((val) => {
        if(value.id === val.id){
            val.firstName = value.firstName;
            val.lastName = value.lastName;
            val.email = value.email;
        }
        return val;
    })
    localStorage.setItem('name', JSON.stringify(updated));
    this.setState({updated});
}


    render(){
        return(
            <div className="ui container tbaluicont">
                <div><h1>Table Data</h1></div>
                <table className="ui celled table">
                    <thead>
                        <tr>
                            <th style={{width: "10%"}}>Sr. no</th>
                            <th style={{width:" 17.5%"}}>First Name</th>
                            <th style={{width:"17.5%"}}>Last Name</th>
                            <th style={{width:"25%"}}>Email Address</th>
                            <th style={{width:"30%"}}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            this.props.dataToBePassed
                            .filter((val) => val.firstName.includes(this.props.serchFor))
                            // .filter((val) => (this.props.serchFor ? val.firstName.startsWith(this.props.serchFor): true))
                            // .filter((val) => (this.props.serchFor ? val.firstName.includes(this.props.serchFor): true))
                            .map((name,srno) => (
                                <tr key={srno}>
                                    <td>{srno+1}</td>
                                    <td>{name.firstName}</td>
                                    <td>{name.lastName}</td>
                                    <td>{name.email}</td>
                                    <td>
                                        <BtnEditDel
                                        delItem = {this.deleteFun}
                                        xyz = {name}
                                        srno = {srno}
                                        editbtn = {this.edit}
                                        
                                        />
                                    </td>
                                </tr>
                            ))
                        }
                        
                    </tbody>
                </table>
                <MyModal 
                showModal = {this.state.showModal}
                closeModal = {this.hideModal}
                activeData = {this.state.activeItem}
                updateItem = {this.updateItem}
                srno = {this.state.srno}
                />
            </div>
        )
    }
}