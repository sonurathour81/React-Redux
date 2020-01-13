import React from  'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

// function based component start

// const App = () =>{
//     window.navigator.geolocation.getCurrentPosition(
//         position => console.log(position),
//         err => console.log(err)
//     );

//     return (
//         <div>
//             <h2>Latitude: </h2>
//             <h2>Longitude: </h2>
//         </div>
//         ); 
// };

// function based component end



// class based component start

class App extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            lat:null, 
            longi:null,
            errMessage:''
        };

        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude, longi: position.coords.longitude }),
            err => this.setState({errMessage: err.message })
        );
    }

    renderContent = () => {
        if (this.state.errMessage && !this.state.lat) {
            return <h2>Error: {this.state.errMessage} </h2>
        }else if (!this.state.errMessage && this.state.lat) {
            return (
               <div>
                   <SeasonDisplay lat = {this.state.lat} />
            {/* //         <h2>Latitude: {this.state.lat}</h2> */}
            {/* //         <h2>Longitude: {this.state.longi}</h2> */}
            {/* <Xyz /> */}
            </div>
                )
        }else{
            // return (<div><h2>Loading...</h2> <Xyz roll='102' /></div>)
            return <Spinner  message="Please accept the current location"/>
        }
    };

    render(){
        return(
            <div className="border red">
                {this.renderContent()}
                
            </div>
        );
    };
};

// class based component end

ReactDOM.render(<App />, document.querySelector('#root'));