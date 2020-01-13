import React from 'react';
import './SeasonDisplay.css';


const ErrorMessage = (props) =>{
    return(
        <div className="ui statistic season-error">
            <h1>
                {props.errMessage}
            </h1>
        </div>
    );
};

ErrorMessage.defaultProps = {
    errMessage: "Location not set please Reload the page!"
};


export default ErrorMessage;