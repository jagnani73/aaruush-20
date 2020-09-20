import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import logo from "../../assets/Shared/envisionLogo.svg";

const Footer = () => {
  return (
    <div className="w-full bg-gray-900 py-10 text-white">
      <div className="flex flex-wrap w-10/12 mx-auto">
        <div className="flex flex-wrap w-1/2 my-auto">
          <h3 className="w-1/3 text-3xl">Reach Us</h3>
          <div className="flex flex-wrap w-2/3">
            <a
              href="https://twitter.com/aaruushsrmist"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-wrap w-8 md:w-10 h-8 md:h-10 mx-auto rounded-md"
            >
              <FontAwesomeIcon icon={faTwitter} className="text-5xl m-auto" />
            </a>
            <a
              href="https://www.instagram.com/aaruush_srm"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-wrap w-8 md:w-10 h-8 md:h-10 mx-auto rounded-md"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-5xl m-auto" />
            </a>
            <a
              href="https://www.instagram.com/aaruush_srm"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-wrap w-8 md:w-10 h-8 md:h-10 mx-auto rounded-md"
            >
              <FontAwesomeIcon icon={faFacebook} className="text-5xl m-auto" />
            </a>
            <a
              href="https://www.youtube.com/channel/UC6mwWpwkZchii-oyWz0v3dw"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-wrap w-8 md:w-10 h-8 md:h-10 mx-auto rounded-md"
            >
              <FontAwesomeIcon icon={faYoutube} className="text-5xl m-auto" />
            </a>
            <a
              href="https://www.linkedin.com/company/aaruush-srm-ist/mycompany/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-wrap w-8 md:w-10 h-8 md:h-10 mx-auto rounded-md"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="text-5xl m-auto" />
            </a>
          </div>
        </div>
        <div className="w-1/2 my-auto">
          <div className="w-full ml-auto">
            <img src={logo} alt="envision" className="ml-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
