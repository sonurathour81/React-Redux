import React from 'react';
import axios from 'axios';
import  {baseURL} from './apis/youtube';
import SearchForm from './SearchForm';
import './Style.css';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

export default class App extends React.Component {

state = {
  videos : [],
  selectedVideo: null
}

componentDidMount(){
  this.getSearchData("songs")

}

  getSearchData = async (xyz) => {
    const searchString = `${baseURL}&q=${xyz}`;
    const result = await axios.get(searchString)
      this.setState({
        videos: result.data.items,
        selectedVideo: result.data.items[0]
    })
  };


  onVideoSelect = video => {
    this.setState({
      selectedVideo: video
    })
    window.scrollTo(0, 0);
  }

  render(){
    return (
      <div className="ui" style={{margin:"20px 50px"}}>
        <SearchForm getSearchData = {this.getSearchData}/>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column" style={{    marginTop:"4px"}}>
              <VideoDetail video = {this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList videos = {this.state.videos} onVideoSelect = {this.onVideoSelect}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}