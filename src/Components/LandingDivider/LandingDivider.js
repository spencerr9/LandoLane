import React from "react";
import "./LandingDivider.css";

export default function LandingDivider(props) {
  const styles = {
    background: {
      backgroundImage: `url(${props.pictureURL})`
    },
    hidden: {
      display: "none"
    }
  };
  return (
    <div id="wrapper">
      {(() => {
        if (props.pictureURL) {
          return <div className="pictureDiv" style={styles.background} />;
        }
      })()}
      <div>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <div>
          {(() => {
            if (props.button2Text && props.button1Text) {
              return (
                <div>
                  <button>{props.button1Text}</button>
                  <button>{props.button2Text}</button>
                </div>
              );
            } else if (props.button1Text) {
              return <button>{props.button1Text}</button>;
            }
          })()}
        </div>
      </div>
    </div>
  );
}
