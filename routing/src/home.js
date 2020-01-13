import React from 'react';

const Home = (props) =>{
    
    return(
        
        <div>
            <h1>Home page is Working!</h1>
            <h2>This is the props element <span>{props.dummy}</span></h2>
        </div>
    )
}

export default Home;