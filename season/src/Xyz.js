import React from  'react';
import ReactDOM from 'react-dom';

class Xyz extends React.Component{
    state = {
        name: 'sonu',
        roll: this.props.roll,
        time: ''
    }

    componentDidMount(){
        setInterval( () =>{
            this.setState({
                time: new Date().toLocaleDateString() + "  " + new Date().toLocaleTimeString()
            });
        },1000);
    };
    


    render(){
        return(
            <div>
                {/* <Xyz /> */}
                {/* Hello, {this.state.name} and Roll No. is {this.state.roll} */}
                {this.state.time}
            </div>
        )
    }
}

// ReactDOM.render(<Xyz />, document.querySelector('#root2'));

export default Xyz;