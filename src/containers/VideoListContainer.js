import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';



//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

const mapStatetoProps = state => {
    return {
        videos: state.videoList
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        handleVideoListEntryTitleClick: (video) => {
            dispatch(changeVideo(video))
        }
    }
}

const VideoListContainer = connect(mapStatetoProps, mapDispatchtoProps)(VideoList);

export default VideoListContainer;


