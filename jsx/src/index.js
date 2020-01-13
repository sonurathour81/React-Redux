import React from  'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spiner from './Spiner';
import ErrorMessage from './ErrorMessage';
import Product from './Product';


class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            lat: null,
            errMessage: ''
        }; 
    };

    xyzloct = () => window.navigator.geolocation.getCurrentPosition(
        position => this.setState({lat: position.coords.latitude}),
        err => this.setState({errMessage: err.message})
    );
    componentDidMount(){
        this.xyzloct();

    }

    

    

    renderData(){
        if(this.state.errMessage && !this.state.lat){
            return <ErrorMessage />;
        }else if(!this.state.errMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat} />
        }else{
            return <Spiner message="Pleae set the Location!"/>
        }
    }

    render(){
        console.log("redered")

       return(
        <div className="border red" style={{textAlign:"center"}}>
            {/* {this.renderData()} */}
            <Product />
        </div>
       );
    }
}

ReactDOM.render(<App />,document.querySelector('#root'));