import React from "react";
import "./LandingDivider.css";

import Button from "@material-ui/core/Button";

export default function LandingDivider(props) {
  let styles = {
    buttonFont: {
        fontFamily: 'Noto Sans HK, sans-serif',
        fontWeight: 500
    }
}
  return (
    <div id="landingDividerWrapper">
      {(() => {
        if (props.pictureURL) {
          return <div className="pictureDiv" style={{backgroundImage: `url(${props.pictureURL})`}} />;
        }
      })()}
      <div className="wordsContainer">
        <h1>{props.title}</h1>
        <p style={{fontWeight: 400}} >{props.text}</p>
        <div>
          {(() => {
            if (props.button2Text && props.button1Text) {
              return (
                <div className="dividerButtons">
                  <Button variant="outlined" size="large" style={styles.buttonFont}>
                    {props.button1Text}
                  </Button>
                  <Button variant="outlined" size="large" style={styles.buttonFont}>
                    {props.button2Text}
                  </Button>
                </div>
              );
            } else if (props.button1Text) {
              return (
                <Button
                  variant="outlined"
                  size="large"
                  // color="primary"
                  style={styles.buttonFont}
                >
                  {props.button1Text}
                </Button>
              );
            }
          })()}
        </div>
      </div>
    </div>
  );
}
