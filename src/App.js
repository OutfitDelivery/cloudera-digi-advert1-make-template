import React from "react";
import PropTypes from "prop-types";
import "./App.scss";

function App({
  width, height, theme, contentType, subheadline, headlineLine1, headlineLine2, headlineLine3, headlineLine4, headlineLine5, displayLine, callToAction}) {
    
    const appStyle = {
      width: `${width}px`,
      height: `${height}px`,
    };
  
  return (
    <div className="App" style={appStyle} data-width={width} data-height={height}>
      <div className="digi-advert-container" data-theme="{theme}" data-text-type="{contentType}">
        <div className="subheadline text-el" data-max-line="2"><h2>{subheadline}</h2></div>
        <div className="headline line-1 text-el" data-max-line="1"><h1>{headlineLine1}</h1></div>
        <div className="headline line-2 text-el" data-max-line="1"><h1>{headlineLine2}</h1></div>
        <div className="headline line-3 text-el" data-max-line="1"><h1>{headlineLine3}</h1></div>
        <div className="headline line-4 text-el" data-max-line="1"><h1>{headlineLine4}</h1></div>
        <div className="headline line-5 text-el" data-max-line="1"><h1>{headlineLine5}</h1></div>
        <div className="display-line text-el" data-max-line="1"><h3>{displayLine}</h3></div>
        <div className="call-to-action text-el"><p data-max-line="1">{callToAction}</p></div>
      </div>
    </div>
  );
}

App.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number, 
  theme: PropTypes.number, 
  contentType: PropTypes.string, 
  subheadline: PropTypes.string, 
  headlineLine1: PropTypes.string, 
  headlineLine2: PropTypes.string, 
  headlineLine3: PropTypes.string, 
  headlineLine4: PropTypes.string, 
  headlineLine5: PropTypes.string, 
  displayLine: PropTypes.string, 
  callToAction: PropTypes.string,
};
App.defaultProps = {
  width: 600,
  height: 315, 
  theme: 1,
  contentType: "subheadline", 
  subheadline: "Subheadline Here", 
  headlineLine1: "", 
  headlineLine2: "", 
  headlineLine3: "", 
  headlineLine4: "", 
  headlineLine5: "", 
  displayLine: "", 
  callToAction: "",
};

export default App;
