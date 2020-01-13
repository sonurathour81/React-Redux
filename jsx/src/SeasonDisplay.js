import React from 'react';
import './SeasonDisplay.css';
import TimeFun from './TimeFun'



const seasonConfig = {
    Winter: {
        text: "Burr, it's cold!",
        iconName: "snowflake"
    },
    Summer: {
        text: "Let's hit the beach!",
        iconName: "sun"
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
    const {text, iconName} = seasonConfig[season];

    return (
        <div className={`${season} season-display`}>
            <i className={`icon-left massive ${iconName} icon`}></i>
            <h1>{text} <TimeFun /> </h1>
            
            <i className={`icon-right massive ${iconName} icon`}></i>
        </div>
    );
}



export default SeasonDisplay;

