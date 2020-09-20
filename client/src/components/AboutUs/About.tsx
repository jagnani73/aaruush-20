import React from "react";

import logo from "../../assets/Shared/aaruushLogo.svg";

const About = () => {
  return (
    <div className="flex flex-wrap w-10/12 mx-auto mt-10">
      <div className="flex flex-wrap w-full">
        <div className="w-1/3 m-auto">
          <h3 className="text-3xl">About SRM</h3>
          <p className="mt-5">
            SRM Institute of Science and Technology is one of India's most
            premier institutes to provide top notch education to about 50,000
            students all across its campuses pan India. Established in the year
            1985, SRM IST takes pride in providing an array of undergraduate,
            postgraduate as well as doctoral programs in the field of
            Engineering, Life Sciences, Medical, Humanities and many more. The
            T.P. Ganesan Auditorium at SRM has been known to break records by
            getting entitled as one of the largest auditoriums in Asia with a
            capacity of 3000 seats. SRM is also the only institution in the
            country to have launched its own satellite SRMSAT in 2011.
          </p>
        </div>
        <div className="flex flex-wrap w-1/2 m-auto">
          <div className="w-1/2 m-auto mb-3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQconx0eip5d8189SaFac1xykYbdradTjBt3ZbnxeWtXQ&usqp=CAU&ec=45702844"
              alt="alt"
              className="mx-auto px-3"
              width="100%"
            />
          </div>
          <div className="w-1/2 m-auto mb-3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQconx0eip5d8189SaFac1xykYbdradTjBt3ZbnxeWtXQ&usqp=CAU&ec=45702844"
              alt="alt"
              className="mx-auto px-3"
              width="100%"
            />
          </div>
          <div className="w-1/2 m-auto mb-3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQconx0eip5d8189SaFac1xykYbdradTjBt3ZbnxeWtXQ&usqp=CAU&ec=45702844"
              alt="alt"
              className="mx-auto px-3"
              width="100%"
            />
          </div>
          <div className="w-1/2 m-auto mb-3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQconx0eip5d8189SaFac1xykYbdradTjBt3ZbnxeWtXQ&usqp=CAU&ec=45702844"
              alt="alt"
              className="mx-auto px-3"
              width="100%"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap w-full mt-10">
        <div className="w-1/6 m-auto">
          <div className="w-full m-auto">
            <img src={logo} alt="aaruush-logo" className="m-auto" />
          </div>
        </div>
        <div className="w-4/6 mx-auto">
          <h4 className="text-xl">#14th Edition</h4>
          <h3 className="text-3xl leading-5">About Aaruush</h3>
          <p className="mt-6">
            Inaugurated in 2007 by late former president Dr.A.P.J. Abdul
            Kalam,Aaruush is a National Level Techno-Management Fest organized
            by SRM IST annually. One of the best and the largest in the nation,
            Aaruush provides a platform for the brilliant, bright and
            like-minded individuals to converge and test their technical and
            managerial skills. Under numerous, unique domains, Aaruush hosts an
            array of events; from workshops and challenges to summits,
            exhibitions, pro-shows etc. to help students develop their skill set
            and imbibe a sense of innovation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
