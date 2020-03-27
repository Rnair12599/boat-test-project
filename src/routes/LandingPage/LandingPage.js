import React, { useContext, useState, useEffect,useCallback } from 'react';
import Media from 'react-media';
import { Link } from 'react-router-dom';

import DownArrow from '../../assets/downArrow.png';
import HoursContent from '../../assets/hours_content.png';
import FBicon from '../../assets/fb_icon.png'
import Instaicon from '../../assets/insta_icon.png'
import DeaConnectionLogo from '../../assets/DeaConnectionLogo.png'


import MobileNavBar from '../../assets/navbar_mobile.png';
import ParkPictures from '../../assets/park_pictures/bantersnaps-Bxzrd0p6yOM-unsplash.png';
import ParkShadowPictures from '../../assets/park_shadow_pictures/bantersnaps-Bxzrd0p6yOM-unsplash@3x.png'
import RamenPictures from '../../assets/ramen_pictures/artur-rutkowski-LDxq4MnYB5U-unsplash.png';
import RamenShadowPictures from '../../assets/ramen_shadow_pictures/artur-rutkowski-LDxq4MnYB5U-unsplash.png';
import UmbrellaPictures from '../../assets/umbrella_pictures/andre-benz-MsMISAIe8Qw-unsplash.png';
import SponsorLogo from '../../assets/sponsors_logo_pictures/Sponsors.png';
import SponsorTeamwork from '../../assets/sponsor_teamwork_pictures/noun_teamwork_people_1979218.png';




import './LandingPage.css';



const LandingPage = ({props}) => {


  const handleBookNowClick = (e) => {

  }

  const renderSemantic = () => {

  }




  return(
    <div className = "landingpage_container">
      <div className = "boatimage_container">
        <Media query="(min-width: 768px)" render={() => (
          <div className = "navBar_Full">
            <div className = "bookNowButtonContainer" >
              <button className = "bookNowButton" onClick = {handleBookNowClick}>Book now</button>
            </div>
            <div className = "navLinksContainer">
              <span>
                <Link className= "navLink" to = "/about">About</Link>
                <Link className= "navLink" to = "/packages">Packages</Link>
                <Link className= "navLink" to = "/contact">Contact</Link>
                <Link className= "navLink" to = "/tours">Tours</Link>
              </span>
            </div>
          </div>
        )}/>
        <Media query="(max-width: 767px)" render={() => (
          <div>
            <div className = "bookNowButtonContainer">
              <button className = "bookNowButton" onClick = {handleBookNowClick}>Book now</button>
            </div>
            <button className = "mobileNavButton">
              <img className = "mobileNavButtonimage" src = {MobileNavBar} alt = "navbar_button"/>
            </button>
          </div>
        )}/>
        <div className = "experience_container">
          <div div className = "experience_text">
            Experience...
          </div>
        </div>
        <div className = "osaka_container">
          <div div className = "osaka_text">
            Osaka
          </div>
        </div>
        <span>
          <div className = "message_container">
            <div div className = "message_text">
              Be entranced with the divine scenery of Osaka while enjoying a luxurious meal and drinks
            </div>
          </div>
        </span>
        <button className = "discoverButton">
          <div div className = "discoverButton_text">
            Discover
          </div>
        </button>
        <div className = "scrolldown_text">
          Scroll Down
        </div>
        <img className = "down_arrow" src = {DownArrow} alt = "down arrow"/>
      </div>

      <div className = "info_container">
        <div className = "tour_content_container">
          <div className = "Discover_text_container">
            <div className = "shadow_text">
              Discover
            </div>
          </div>
          <div className = "textandinfo">
            <div className = "tour_text_card">
              <div className = "tour_text_title">
                Tour
              </div>
              <div className = "tour_text_container">
                <p>
                  Starting at the beautiful Taisho, be comforted by our kimonos, tailored by our in-house specialist.Welcomed by an included meal & drinks, through the trip there is a stop at the beautiful Osaka castle for a photoshoot, making way to bustle of Dotonbori for sightseeing and ending with  a visitation to Nakanoshima Park!
                </p>
              </div>
            </div>
            <div className = "park_image_container">
              <img className = "park_image" src = {ParkPictures} alt = "park_picture"/>
            </div>
          </div>
        </div>

        <div className = "food_content_container">
          <div className = "textandinfo">
            <div className = "ramen_image_container">
              <img className = "ramen_image" src = {RamenPictures} alt = "ramen_picture"/>
            </div>
            <div className = "food_text_card">
              <div className = "food_text_title">
                Food
              </div>
              <div className = "food_text_container">
                <p>
                      We want you to relax & enjoy the beautiful scenery, a wide range of food & drinks will be available throughout the tour.
                </p>
                <p>
                      For your enjoyment, during the tour, guests  are provided with snacks, non-alcoholic such as Japanese Green tea & alcoholic beverages such as - Sake, Japanese Whiskey & Wine!
                </p>
                <p>
                      Multiple Cuisines are offered throughout the trip - Japanese-italian, Hamburgers, Yakitori (traditional grilled chicken), Ramen, Tempura, Takoyaki & Korean meals! Even Vegetarian options are available!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className = "hours_content_container">
          <div className = "Discover_text_container">
            <div className = "shadow_text">
              Cherish
            </div>
          </div>
          <div className = "textandinfo">
            <div className = "hours_text_card">
              <img className = "hours_text_data" src={HoursContent} alt="hours_content"/>

            </div>
            <div className = "umbrella_image_container">
              <img className = "umbrella_image" src = {UmbrellaPictures} alt = "park_picture"/>
            </div>
          </div>
        </div>


        <div className = "review_content_container">
          <div className = "reviews_text_container">
            <div className = "shadow_text">
              Adventure
            </div>
          </div>
          <div className = "review_container">
            <div className  = "review_inner_container">

                <div className = "review_img_container">
                </div>

                <div classname = "review_nameandquote_container">
                  <div className = "review_name_container">
                    <div className = "review_name_text">
                      Michael Gray
                    </div>
                    <div className = "review_quote_text">
                       “One of the best tours I’ve been on, great scenery & the food was great!
                    </div>
                  </div>
                </div>

            </div>
          </div>
        </div>


      </div>

      <div className = "footer_container">
        <span>
          <div className = "footer_left_column">
            <div className = "footer_text_legal">
              Legal
            </div>
            <div className = "footer_text">
              Terms of Use
            </div>
            <div className = "footer_text">
              Privacy Policy
            </div>
          </div>
          <div className = "footer_middle_column">
            <div className = "social_icon_cont">
              <img className = "ind_icon_cont" src = {FBicon}/>
              <div className = "icon_gap_cont"></div>
              <img className = "ind_icon_cont" src = {Instaicon}/>
            </div>
            <div className = "dea_logo_cont">
              <img className = "dea_logo" src = {DeaConnectionLogo}/>
            </div>
          </div>
          <div className = "footer_right_column">
            <div className = "footer_text_contact">
              Contact
            </div>
            <div className = "footer_text">
              +81-70-2822-2914
            </div>
            <div className = "footer_text">
              yoshi@guideqr.com
            </div>
          </div>
        </span>
      </div>

    </div>
  );

}

export default LandingPage
