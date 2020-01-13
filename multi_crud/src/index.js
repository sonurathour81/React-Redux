import React from 'react';
import ReactDOM from 'react-dom';
import CreateForm from './component/CreateForm';
import './MainStyle.css';
import TableData from './component/TableData';
import Search from './component/Search';

class App extends React.Component {

state = {
    dataToBePassed:[],
    serchFor:''
}



passingFun(data){
    this.setState({
        dataToBePassed: data
    })
}

searchFromSearch = (SearchName) =>{
    this.setState({
        serchFor: SearchName
    })
    // console.log(this.state.serchFor)
}



  render(){
    return (
            <div>
                <div>
                    <CreateForm 
                    passingFun = {this.passingFun.bind(this)}
                    dataToBePassed={this.state.dataToBePassed}
                    />
                </div>
                <div>
                    <Search
                    searchFromSearch = {this.searchFromSearch}
                    />
                </div>
                <div>
                    <TableData 
                    serchFor = {this.state.serchFor}
                    passingFun = {this.passingFun.bind(this)} 
                    dataToBePassed={this.state.dataToBePassed}/>
                </div>
            </div>
        );
    };
};

ReactDOM.render(<App />, document.getElementById('root'));

