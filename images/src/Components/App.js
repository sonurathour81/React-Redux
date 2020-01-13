import React from 'react';
import unsplash, {baseURL} from '../api/unSplash';
import SearchBar from './SearchBar';
import ImageList from './ImagesList';
import RefExample from './RefExample';
import './style.css';

export default class App extends React.Component{
    state = {
        images:[],
    }

    componentDidMount(){
     this.onSubmitCallBack("cars");
    }
    
    onSubmitCallBack = async (term) => {
       const response = await unsplash.get(`${baseURL}/search/photos`,{
            params: {
                query: term,
                per_page : 50
            }
        })
        this.setState({
            images: response.data.results
        })
    }
    
    
    // onSubmitCallBack = (term) => {
    //     axios.get('https://api.unsplash.com/search/photos',{
    //         params: {query: term},
    //         headers:{
    //             Authorization:
    //             'Client-ID afd3d62221572b6588cd1d56b88491830bea763d56ea247fae2a1f7d8c61bbbf'
    //         }
    //     })
    //     .then( response =>{
    //         console.log(response.data.results);
    //     })        
    // }
    // async onSubmitCallBack(term){
    //     const response = await axios.get('https://api.unsplash.com/search/photos',{
    //         params: {query: term},
    //         headers:{
    //             Authorization:
    //             'Client-ID afd3d62221572b6588cd1d56b88491830bea763d56ea247fae2a1f7d8c61bbbf'
    //         }
    //     });
    //     // .then( response =>{
    //         console.log(response.data.results);
    //     // })        
    // }


    render(){
        return(
            <div className="ui container"style={{marginTop:"20px"}}>
                <SearchBar onSubmitCallBack = {this.onSubmitCallBack}/>
                <ImageList imagelist = {this.state.images} />
                <h1>RefExample</h1>
                <RefExample />

            </div>
        )
    }
}