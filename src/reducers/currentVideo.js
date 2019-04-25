import Redux from 'redux';

var currentVideoReducer = (state, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  console.log(state);
  switch(action.type) {
    case 'CHANGE_VIDEO':
      return action.video
    default:
      return state.currentVideo;
  }
};

export default currentVideoReducer;

