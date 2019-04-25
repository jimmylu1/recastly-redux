import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleVideoSearch from '../actions/search.js';

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

const mapStatetoProps = state => {
    return {
        video: state.currentVideo,
        videos: state.videoList
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        handleSearchInputChange: (q) => {
            dispatch(handleVideoSearch(q))
        }
    }
}

const SearchContainer = connect(mapStatetoProps, mapDispatchtoProps)(Search);

export default SearchContainer;
