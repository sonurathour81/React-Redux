import React from 'react';


const ImageList = (props) => {
    const img = props.imagelist.map(({description, id, urls, alt_description, likes}) =>{
        return (
            <div className="column" key = {id}>
                <div className="ui segment">
                    <img alt={description}  src={urls.regular} style={{width:"100%",height:"200px",objectFit:"cover"}} className="ui image"></img>
                    <div className="content conthover">
                        <h3 className="heading h3Tage">{alt_description}</h3>
                        <p>
                            <i className="thumbs up outline icon"></i>
                            {likes}
                        </p>
                    </div>
                </div>
            </div>
    )}    
    )
//    const img = props.imagelist.map((image) =>{
//         return <div><img alt={image.description} key={image.id} src={image.urls.regular}></img></div>
//     })
    return(
    <div className="ui three column grid">
        {img}
    </div>
    )
}

export default ImageList;