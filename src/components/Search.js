import React from 'react';

 
//class Search extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     value: ''
  //   };
  // }

  // handleInputChange(e) {
  //   this.props.getYouTubeVideos(e.target.value);
  //   this.setState({
  //     value: e.target.value
  //   });
  // }

  var Search = (props) => (
    <div className="search-bar form-inline">
      <input
        className="form-control"
        type="text"
        onChange={props.handleSearchInputChange}
      />
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );


export default Search;
