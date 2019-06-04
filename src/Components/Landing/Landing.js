import React from "react";
import "./Landing.css";
import { Parallax } from "react-parallax";

import LandingDivider from "../LandingDivider/LandingDivider";
import ConnectOnIG from "../ConnectOnIG/ConnectOnIG";

function Landing() {
  return (
    <div>
      <Parallax bgImage={require("../../Images/flowers.webp")} strength={500}>
        <div style={{ height: "100vh" }} />
      </Parallax>
      {/* <div className='Landing Photo1'></div> */}
      <LandingDivider
        pictureURL="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg"
        title="HELLO"
        text="I am Jenica. I am the awesomest, coolest, legitest, rootinest, tootinest photographer in the game! I travel, I like concerts, I love my dogs and my boyfriend (yes, I'm taken). Blah blah blah star wars. Blah blah blah movies. Blah blah blah I NEED A COKE!"
        button1Text="Get to know me"
        // button2Text='click me'
      />
      <Parallax bgImage={require("../../Images/couple2.webp")} strength={500}>
        <div style={{ height: "100vh" }} />
      </Parallax>
      {/* <div className="Landing Photo2" /> */}
      <LandingDivider
        // pictureURL='https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg'
        title="Learn more about our adventure destination wedding photography service"
        // text="I am Jenica. I am the awesomest, coolest, legitest, photographer in the game! I travel, I like concerts, I love my dogs and my boyfriend (yes, I'm taken). "
        button1Text="Adventure Elopements"
        button2Text="Destination Intimate Weddings"
      />
      <Parallax bgImage={require("../../Images/couple3.webp")} strength={500}>
        <div style={{ height: "100vh" }} />
      </Parallax>
      {/* <div className="Landing Photo3" /> */}
      <LandingDivider
        // pictureURL='https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg'
        title="learn more about our adventure session photography services"
        // text="I am Jenica. I am the awesomest, coolest, legitest, photographer in the game! I travel, I like concerts, I love my dogs and my boyfriend (yes, I'm taken). "
        button1Text="explore adventure sessions"
        // button2Text='Destination Intimate Weddings'
      />
      <Parallax bgImage={require("../../Images/couple4.webp")} strength={500}>
        <div style={{ height: "100vh" }} />
      </Parallax>
      {/* <div className="Landing Photo4" /> */}
      <ConnectOnIG />
    </div>
  );
}

export default Landing;
