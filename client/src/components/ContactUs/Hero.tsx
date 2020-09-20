import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <div className="flex flex-wrap text-5xl w-full h-screen bg-contactUsBG bg-center bg-no-repeat bg-cover">
      <div className="w-3/4 lg:w-1/2 m-auto text-white text-center">
        <div className="w-full lg:w-1/2 ml-auto my-auto bg-contactUs shadow-contactUs text-base font-bold p-10">
          <h1>Aaruush Room, opposite Placement Cell </h1>
          <h1>SRM IST, Kattankulathur, TN - 603203</h1>
          <h2 className="mt-4">
            M. Rahul: <a href="tel:+918125273043">+91 81252 73043</a>
          </h2>
          <h2 className="mt-4">
            Rakesh Mohanty: <a href="tel:+919818475636"> +91 98184 75636</a>
          </h2>
          <h2 className="mt-4">
            <a href="mailto:csiorg@aaruush.net">csiorg@aaruush.net</a>
          </h2>
          <div className="flex flex-wrap text-xl lg:text-2xl w-full mx-auto mt-6">
            <a
              href="https://twitter.com/aaruushsrmist"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-wrap w-8 md:w-10 h-8 md:h-10 mx-auto bg-twitter rounded-md"
            >
              <FontAwesomeIcon icon={faTwitter} className="m-auto" />
            </a>
            <a
              href="https://www.instagram.com/aaruush_srm"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-wrap w-8 md:w-10 h-8 md:h-10 mx-auto bg-instagram rounded-md"
            >
              <FontAwesomeIcon icon={faInstagram} className="m-auto" />
            </a>
            <a
              href="https://www.facebook.com/aaruush.srm"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-wrap w-8 md:w-10 h-8 md:h-10 mx-auto bg-facebook rounded-md"
            >
              <FontAwesomeIcon icon={faFacebookF} className="m-auto" />
            </a>
            <a
              href="https://www.youtube.com/channel/UC6mwWpwkZchii-oyWz0v3dw"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-wrap w-8 md:w-10 h-8 md:h-10 mx-auto bg-youtube rounded-md"
            >
              <FontAwesomeIcon icon={faYoutube} className="m-auto" />
            </a>
            <a
              href="https://www.linkedin.com/company/aaruush-srm-ist/mycompany/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-wrap w-8 md:w-10 h-8 md:h-10 mx-auto bg-linkedin rounded-md"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="m-auto" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
