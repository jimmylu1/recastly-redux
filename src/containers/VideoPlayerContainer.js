import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';



//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

const mapStatetoProps = state => {
    return {
        video: state.currentVideo
    }
}

const mapDispatchtoProps = dispatch => {
    return {

    }
}

const VideoPlayerContainer = connect(mapStatetoProps, mapDispatchtoProps)(VideoPlayer);

export default VideoPlayerContainer;
