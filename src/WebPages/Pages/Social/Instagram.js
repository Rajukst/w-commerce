import React from 'react';
import "./Instagram.css"
import socialOne from "../../../Assets/Icons/social1.jpg"
import socialTwo from "../../../Assets/Icons/social2.jpg"
import socialThree from "../../../Assets/Icons/social3.jpg"
import socialFour from "../../../Assets/Icons/social4.jpg"
import InstaIcon from "../../../Assets/Icons/instagram_logo.png"
const Instagram = () => {
    return (
        <div className='socialIconics'>
            <div className="imagesIconicss">
                <div className="imagesiornf">
                    <img className='img-fluid' src={socialFour} alt="" />
                </div>
                <div className="imagesiornf">
                    <img className='img-fluid' src={socialOne} alt="" />
                </div>
                <div className="imagesiornfss">
                  <div className="instaInc">
                  <img className='img-fluid instaImages' src={InstaIcon} alt="" />
                  </div>
                    <div className="iconsTexts">
                        <h5>Follow Us</h5>
                        <h2>Instagram</h2>
                    </div>
                </div>
                <div className="imagesiornf">
                    <img className='img-fluid' src={socialThree} alt="" />
                </div>
                <div className="imagesiornf">
                    <img className='img-fluid' src={socialTwo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Instagram;

