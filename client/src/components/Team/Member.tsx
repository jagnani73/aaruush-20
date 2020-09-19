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
      <div className="flex flex-wrap ml-auto w-3/4 bg-red-300 transform -translate-y-full group-hover:-translate-y-1/2 py-2 px-3">
        <h2 className="w-full text-2xl">{props.name}</h2>
        <div className="flex flex-wrap w-full">
          <span className="w-8 flex flex-wrap m-auto border-red-200 border-t-2"></span>
          <p className="text-sm">{props.designation}</p>
        </div>
      </div>
    </div>
  );
};

export default Member;
