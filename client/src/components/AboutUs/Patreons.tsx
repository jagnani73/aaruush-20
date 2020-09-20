import React from "react";

const Patreons = () => {
  const Patreons = [
    {
      img:
        "https://im.rediff.com/movies/2014/sep/29hrithik-roshan1.jpg?w=670&h=900",
      name: "Dr. C Muthamizhchelvan",
      designation: "Pro-Vice Chancellor & Director - Engg. & Technology",
    },
    {
      img:
        "https://im.rediff.com/movies/2014/sep/29hrithik-roshan1.jpg?w=670&h=900",
      name: "Dr. C Muthamizhchelvan",
      designation: "Pro-Vice Chancellor & Director - Engg. & Technology",
    },
    {
      img:
        "https://im.rediff.com/movies/2014/sep/29hrithik-roshan1.jpg?w=670&h=900",
      name: "Dr. C Muthamizhchelvan",
      designation: "Pro-Vice Chancellor & Director - Engg. & Technology",
    },
    {
      img:
        "https://im.rediff.com/movies/2014/sep/29hrithik-roshan1.jpg?w=670&h=900",
      name: "Dr. C Muthamizhchelvan",
      designation: "Pro-Vice Chancellor & Director - Engg. & Technology",
    },
  ];

  return (
    <div className="flex flex-wrap w-10/12 mx-auto mt-10">
      <h3 className="text-3xl leading-8 mb-8">Our Patreons</h3>
      <div className="flex flex-wrap w-full mx-auto">
        {Patreons.map((patreon, index) => (
          <div key={index} className="flex flex-wrap w-8/12 mg:5/12 lg:w-1/6 mx-auto mb-10 lg:mb-0">
            <div className="w-full">
              <img
                src={patreon.img}
                alt="alt"
                width="100%"
                className="rounded-t-lg"
              />
            </div>
            <div className="w-full bg-gray-900 text-white text-center rounded-b-lg">
              <h6 className="my-3 text-xs md:text-sm lg:text-base">{patreon.name}</h6>
              <p className="text-sm mx-3 mb-3 font-thin">{patreon.designation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Patreons;
