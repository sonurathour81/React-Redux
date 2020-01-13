import React from 'react';

class TimeFun extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            time: '',
            date: ''
        }
    }
    componentDidMount(){
        setInterval((state) => {
            this.setState({
                time: new Date().toLocaleTimeString(),
                date: new Date().toLocaleDateString()
            })
        }, 1000);
    }
    render(){
        return(
            <h2>
                {this.state.time}
            </h2>
        );
    }
}

export default TimeFun;