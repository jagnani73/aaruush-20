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
    <div className="flex flex-wrap w-full">
      <div className="flex flex-wrap w-full lg:w-1/2">
        <div className="w-10/12 mx-auto mt-10">
          <h1 className="text-4xl text-justify lg:text-left">Meet the Team</h1>
          <p className="w-full lg:w-1/2 my-10">
            Lorem qui tempor nostrud adipisicing sint mollit aute laboris duis
            eu culpa mollit sint. Eiusmod adipisicing qui incididunt cupidatat
            officia pariatur ex dolor do eiusmod cillum. Tempor irure elit
            occaecat magna nulla magna amet sunt ullamco.
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
