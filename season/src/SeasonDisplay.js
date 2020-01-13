import React from 'react';
// import ReactDOM from 'react-dom';
import './SeasonDisplay.css';
import Xyz from './Xyz';
const seasonConfig = {
    Summer:{
        text: "Let's hit the beach!",
        iconName: 'sun'
    },
    Winter:{
        text: "Burr, it's cold!",
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) =>{
    if(month > 2 && month < 9){
        return lat > 0 ? 'Summer' : 'Winter';
    }else{
        return lat > 0 ? 'Winter' : 'Summer';
    }
}

const SeasonDisplay = (props) =>{
    const season = getSeason(props.lat, new Date().getMonth());
    // const text = season === "Winter" ? "Burr, it's chilly!" : "Let's hit the beach!";
    // const icon = season === "Winter" ? "snowflake" : "sun";
    console.log(season);
    const {text, iconName} = seasonConfig[season];
    return (
        // <div>
        //     Now the Current Season is <b>{season}</b>
        // </div>

        <div className={`season-display ${season}`}>
            <i className = {`icon-left massive ${iconName} icon`} />
            <h1> {text} <Xyz /></h1>
            <i className = {`icon-right massive ${iconName} icon`} />           
        </div>
    );
}

export default SeasonDisplay;