import React from "react";

interface MemberProps {
  img: string;
  name: string;
  designation: string;
}

const Member: React.FC<MemberProps> = (props) => {
  return (
    <div className="group w-full text-right">
      <div>
        <img src={props.img} alt="playah!" width="100%" />
      </div>
      <div className="flex flex-wrap ml-auto w-full lg:w-3/4 bg-teamCard text-team transform lg:-translate-y-full group-hover:-translate-y-1/2 py-2 pr-3">
        <h2 className="w-full text-base lg:text-2xl">{props.name}</h2>
        <div className="flex flex-wrap w-full">
          <span className="w-8 flex flex-wrap m-auto border-team border-t-2"></span>
          <p className="text-xs lg:text-sm">{props.designation}</p>
        </div>
      </div>
    </div>
  );
};

export default Member;
