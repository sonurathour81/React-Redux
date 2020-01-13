import { combineReducers } from 'redux';

const songsReducer = () => {
    return(
        [
            { title: 'sonu1', duration: '4:05' },
            { title: 'sonu2', duration: '2:05' },
            { title: 'sonu3', duration: '1:05' },
            { title: 'sonu4', duration: '2:50' },
            { title: 'sonu5', duration: '3:50' }
        ]
    );
};

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
}


export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})

