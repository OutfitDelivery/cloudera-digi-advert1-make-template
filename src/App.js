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

    function conditionalTextCheck(text, classList, elementType){
      if(text == "" || text == "null") return "";
      classList += " text-el";
      /**/
      text = text.split("[break]").join("\n");
      let innerElement = <span>{text}</span>;
      switch(elementType){case "h1":innerElement = <h1>{innerElement}</h1>;break;case "h2":innerElement = <h2>{innerElement}</h2>;break;case "h3":innerElement = <h3>{innerElement}</h3>;break;case "p":innerElement = <p>{innerElement}</p>;break;}
      return  <div className={classList}>{innerElement}</div>
    }

    function heightStuff(el, maxLine, name = null){
      let innerSpan = el.querySelector("span");
      let elHeight = window.getComputedStyle(el).height;
      let fontSize = innerSpan != null ? window.getComputedStyle(innerSpan).fontSize : window.getComputedStyle(el).fontSize;
      let lineHeight = innerSpan != null ? window.getComputedStyle(innerSpan).lineHeight : window.getComputedStyle(el).lineHeight;
      let limitHeight = parseFloat(lineHeight) * maxLine + (parseFloat(lineHeight) - 10);
      if(parseFloat(elHeight) > limitHeight){
        el.className = "overflow";
      }
    }

    function maxHeight(el){
      if(!((width == 1280 && height == 200) || (width == 1200 && height == 200))){
        let elHeight = parseInt(window.getComputedStyle(el).height) - parseInt(window.getComputedStyle(el).paddingTop) - parseInt(window.getComputedStyle(el).paddingBottom);
        let maxheight = window.getComputedStyle(el).maxHeight;
        if(parseInt(elHeight) >= parseInt(maxheight)){
          el.className = "overflow " + "text-area";
        }
      }
    }

    function between (lower, upper) {
      var scale = upper - lower + 1;
      return Math.floor(lower + Math.random() * scale);
    }

    var htmlStructure = (
      <div data-headline-size={headlineSize} data-display-line-size={displayLineSize}>
      <div className="App" data-theme={theme} style={appStyle}>
        <div data-width={width/4} data-height={height/4}>
            <div className="placeholder" style={placeholderBkg}></div>
            <div className="text-area" data-theme={theme} data-text-type={contentType} ref={el=>maxHeight(el)}>
              
            {conditionalTextCheck(subheadline, "subheadline", "h2")}
            {displayLinePosition === "top" ? conditionalTextCheck(displayLine, "display-line", "h3") : ""}
            <div className="heading">
              {conditionalTextCheck(headlineLine1, "headline line-1", "h1")}
              {conditionalTextCheck(headlineLine2, "headline line-2", "h1")}
              {conditionalTextCheck(headlineLine3, "headline line-3", "h1")}
              {conditionalTextCheck(headlineLine4, "headline line-4", "h1")}
              {conditionalTextCheck(headlineLine5, "headline line-5", "h1")}
            </div>
            {displayLinePosition === "bottom" ? conditionalTextCheck(displayLine, "display-line", "h3") : ""}
            {conditionalTextCheck(callToAction, "call-to-action", "p")}
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
  displayLineSize: PropTypes.string,
  displayLinePosition: PropTypes.string,
  callToAction: PropTypes.string,
};

App.defaultProps = {
  width:2400,
  height:1260, 
  theme: 4,
  contentType: "heading-2", 
  subheadline: "Subheadline", 
  headlineLine1: "How to drive machine platform [break] that lets you", 
  headlineLine2: "", 
  headlineLine3: "", 
  headlineLine4: "", 
  headlineLine5: "",
  headlineSize: "1",
  displayLine: "Display", 
  displayLineSize: "1",
  displayLinePosition: "bottom",
  callToAction: "Watch",
};


export default App;
