import React from "react";
import Button from "@material-ui/core/Button";
import "./ConnectOnIG.css";

export default function ConnectOnIG() {
  return (
    <div className="connectOnIGWrapper">
      <div className="IGtitleButton">
        <h1>Connect on Instagram</h1>
        <Button variant="outlined" size="large">
          @LandoLaneCreative
        </Button>
      </div>
      <div>
        Instagram posts
        </div>
    </div>
  );
}
