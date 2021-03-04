import React from "react";
import PropTypes from "prop-types";
import "./css/App.scss";
import "./css/theme1.scss";
import "./css/theme2.scss";
import "./css/theme3.scss";
import "./css/theme4.scss";


function App({
  width, height, theme, contentType, subheadline, headlineLine1, headlineLine2, headlineLine3, headlineLine4, headlineLine5, headlineSize, displayLine, displayLineSize, displayLinePosition, callToAction}) {
    
    const appStyle = {
      width: `${width}px`,
      height: `${height}px`,
    };

    const placeholderBkg = {
      backgroundImage: `url(https://cdn.jsdelivr.net/gh/OutfitDelivery/cloudera-digi-advert1-make-template@master/src/assets/Placeholder/Theme${theme}/${width/4}x${height/4}.png)`,
    };

    function conditionalTextCheck(text, classList){
      classList += " text-el";
      let textChild = text.props.children;
      try{textChild = textChild.props.children} catch(e){}
      return (textChild !== "" && textChild !== "null") ? (<div className={classList} data-max-line="1">{text}</div>) : "";
    }

    var htmlStructure = (
      <div data-headline-size={headlineSize} data-display-line-size={displayLineSize}>
      <div id="test" className="App" data-theme={theme} style={appStyle}>
        <div data-width={width/4} data-height={height/4}>
            <div className="placeholder" style={placeholderBkg}></div>
            <div className="text-area" data-theme={theme} data-text-type={contentType}>
            {conditionalTextCheck(<h2>{subheadline}</h2>, "subheadline")}
            {displayLinePosition === "top" ? conditionalTextCheck(<h3>{displayLine}</h3>, "display-line") : ""}
            <div className="heading">
              {conditionalTextCheck(<h1><span>{headlineLine1}</span></h1>, "headline line-1")}
              {conditionalTextCheck(<h1><span>{headlineLine2}</span></h1>, "headline line-2")}
              {conditionalTextCheck(<h1><span>{headlineLine3}</span></h1>, "headline line-3")}
              {conditionalTextCheck(<h1><span>{headlineLine4}</span></h1>, "headline line-4")}
              {conditionalTextCheck(<h1><span>{headlineLine5}</span></h1>, "headline line-5")}
            </div>
            {displayLinePosition === "bottom" ? conditionalTextCheck(<h3>{displayLine}</h3>, "display-line") : ""}
            {conditionalTextCheck(<p data-max-line="1">{callToAction}</p>, "call-to-action")}
          </div>
        </div>
      </div>
      </div>
    );
  
  return htmlStructure;
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
  headlineSize: PropTypes.string,
  displayLine: PropTypes.string, 
  displayLineSize: PropTypes.number,
  displayLinePosition: PropTypes.string,
  callToAction: PropTypes.string,
};

App.defaultProps = {
  width:4320,
  height:4320, 
  theme: 4,
  contentType: "heading-1", 
  subheadline: "analytics", 
  headlineLine1: "three ways to achieve", 
  headlineLine2: "machine learning", 
  headlineLine3: "excellence", 
  headlineLine4: "", 
  headlineLine5: "",
  headlineSize: "1",
  displayLine: "say yes", 
  displayLineSize: 1,
  displayLinePosition: "bottom",
  callToAction: "download",
};


export default App;
