import React from "react";
import PropTypes from "prop-types";
import "./App.css";

function App({ avatar, title }) {
  const avatarStyles = {
    backgroundImage: `url('${avatar}')`,
  };

  return (
    <div className="App">
      <div className="photo" style={avatarStyles}></div>
      <div className="code" />
    </div>
  );
}

App.propTypes = {
  avatar: PropTypes.string,
};
App.defaultProps = {
  avatar:
    "https://res.cloudinary.com/duynlpdrb/image/upload/c_crop,g_faces,h_691,w_1320/v1610599038/uploads/czifwatqfqlsgbhsst5b.jpg",
};

export default App;
