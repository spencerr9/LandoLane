import React from "react";
import "./Landing.css";
import { Parallax } from "react-parallax";
import { LazyLoadComponent } from 'react-lazy-load-image-component';

import LandingDivider from "../LandingDivider/LandingDivider";
import ConnectOnIG from "../ConnectOnIG/ConnectOnIG";

function Landing() {
    const parallaxStr = 500
  return (
    <div>
      <LazyLoadComponent>
        <Parallax bgImage={require("../../Images/flowers.jpg")} strength={parallaxStr}>
          <div style={{ height: "100vh" }} />
        </Parallax>
      </LazyLoadComponent>

      <LandingDivider
        pictureURL="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg"
        title="HELLO"
        text="I am Jenica. I am the awesomest, coolest, legitest, rootinest, tootinest photographer in the game! I travel, I like concerts, I love my dogs and my boyfriend (yes, I'm taken). Blah blah blah star wars. Blah blah blah movies. Blah blah blah I NEED A COKE!"
        button1Text="Get to know me"
        // button2Text='click me'
      />

      <LazyLoadComponent>
        <Parallax bgImage={require("../../Images/portrait1.jpg")} strength={parallaxStr}>
          <div style={{ height: "100vh" }} />
        </Parallax>
        {/* <div className="Landing Photo2" /> */}
      </LazyLoadComponent>

      <LandingDivider
        // pictureURL='https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg'
        title="Learn more about our adventure destination wedding photography service"
        // text="I am Jenica. I am the awesomest, coolest, legitest, photographer in the game! I travel, I like concerts, I love my dogs and my boyfriend (yes, I'm taken). "
        button1Text="Adventure Elopements"
        button2Text="Destination Intimate Weddings"
      />

      <LazyLoadComponent>
        <Parallax bgImage={require("../../Images/couple3.jpg")} strength={parallaxStr}>
          <div style={{ height: "100vh" }} />
        </Parallax>
        {/* <div className="Landing Photo3" /> */}
      </LazyLoadComponent>

      <LandingDivider
        // pictureURL='https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg'
        title="learn more about our adventure session photography services"
        // text="I am Jenica. I am the awesomest, coolest, legitest, photographer in the game! I travel, I like concerts, I love my dogs and my boyfriend (yes, I'm taken). "
        button1Text="explore adventure sessions"
        // button2Text='Destination Intimate Weddings'
      />

      <LazyLoadComponent>
        <Parallax bgImage={require("../../Images/couple5.jpg")} strength={parallaxStr}>
          <div style={{ height: "100vh" }} />
        </Parallax>
        {/* <div className="Landing Photo4" /> */}
      </LazyLoadComponent>
      
      <ConnectOnIG />
    </div>
  );
}

export default Landing;
