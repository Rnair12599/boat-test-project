import React from "react";
import "../LandingPage/LandingPage.css";
import { Link } from "react-router-dom";
import Media from "react-media";

export default function NavBar() {
  const handleBookNowClick = e => {};

  const mobileNavBar = () => {
    return (
      <button className="mobileNavButton">
        <img
          className="mobileNavButtonimage"
          src="../../assets/navbar_mobile.png"
          alt="navabar button"
        />
      </button>
    );
  };
  const normalNavBar = () => {
    return (
      <div className="navLinksContainer">
        <span>
          <Link className="navLink" to="/about">
            About
          </Link>
          <Link className="navLink" to="/packages">
            Packages
          </Link>
          <Link className="navLink" to="/contact">
            Contact
          </Link>
          <Link className="navLink" to="/tours">
            Tours
          </Link>
        </span>
      </div>
    );
  };
  return (
    <div className="navBar_Full">
      <div className="bookNowButtonContainer">
        <button className="bookNowButton" onClick={handleBookNowClick}>
          Book now
        </button>
      </div>
      <Media
        query="(min-width: 768px)"
        render={() => (
          <div className="navLinksContainer">
            <span>
              <Link className="navLink" to="/about">
                About
              </Link>
              <Link className="navLink" to="/packages">
                Packages
              </Link>
              <Link className="navLink" to="/contact">
                Contact
              </Link>
              <Link className="navLink" to="/tours">
                Tours
              </Link>
            </span>
          </div>
        )}
      />
      <Media
        query="(max-width: 767px)"
        render={() => (
          <button className="mobileNavButton">
            <img
              className="mobileNavButtonimage"
              src="../../assets/navbar_mobile.png"
              alt="navabar button"
            />
          </button>
        )}
      />
    </div>
  );
}
