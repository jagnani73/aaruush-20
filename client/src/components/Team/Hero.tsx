import React, { useState, useEffect } from "react";

import APIService from "../../services/axios";
import Member from "./Member";

interface MemberStateType {
  img: string;
  name: string;
  designation: string;
}

const Hero = () => {
  const [members, setMembers] = useState<MemberStateType[]>([]);

  useEffect(() => {
    APIService.get(`/team`)
      .then((res) => {
        setMembers(res.data.team);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data);
      });
  }, []);

  return (
    <div className="flex flex-wrap w-full bg-team">
      <div className="flex flex-wrap w-full lg:w-1/2">
        <div className="w-10/12 mx-auto mt-10 text-white">
          <h1 className="text-4xl text-justify lg:text-left">
            Meet the <strong>Core Team</strong>
          </h1>
          <p className="w-full lg:w-1/2 mb-10 mt-5 italic">
            "The strength of the team is each individual member.
            <br />
            The strength of each member is the team."
          </p>
        </div>
      </div>
      <div className="flex flex-wrap w-full">
        {members.map((member, index) => (
          <div key={index} className="w-1/2 lg:w-1/6 mx-auto px-3 lg:px-6 mt-5">
            <Member
              name={member.name}
              designation={member.designation}
              img={member.img}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
