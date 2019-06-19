import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import './FamilyPortraits.css';
import { Parallax } from "react-parallax";
import { LazyLoadComponent } from 'react-lazy-load-image-component';


export default function FamilyPortraits(){
    const parallaxStr = 300
    return(
        <div>
            <NavBar />
            <LazyLoadComponent>
                <Parallax bgImage={require("../../Images/familyAndPortraits/familyHero.jpg")} strength={parallaxStr}>
                    <div style={{ height: "100vh" }} />
                </Parallax>
            </LazyLoadComponent>
            {/* <Parallax bgImage={require("../../Images/familyAndPortraits/familyHero.jpg")} strength={parallaxStr}>
                <div style={{ height: "100vh" }} />
            </Parallax> */}
            <div style={{height: '100vh'}}>
                pictures grid here
            </div>
            <Footer />
        </div>
    )
}