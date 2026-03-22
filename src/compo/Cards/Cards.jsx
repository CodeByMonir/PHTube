import React, { use } from "react";

const Cards = ({ information }) => {
  const info = use(information);
  const videoInfo = info.videos;

  return (
    <div className="grid grid-cols-4">
      {videoInfo.map((data) => (
        <div className="w-78 h-81.25">
          <div className="relative ">
            <img className="w-78 h-50 rounded-md" src={data.thumbnail} alt="" />
            <div className="absolute right-4 bottom-4">
              <p className="bg-black text-white text-[10px] p-1">Duration</p>
            </div>
          </div>
          <div className="flex gap-3 my-5">
            {data.authors.map((data) => (
              <img
                className="w-10 h-10 rounded-full overflow-hidden"
                src={data.profile_picture}
                alt=""
              />
            ))}
            <div>
              <h1 className="text-[#171717] font-bold leading-6.5">
                {data.title}
              </h1>
              {data.authors.map((data) => (
                <div className="flex gap-2.5">
                  <p className="text-[#17171770] text-3.5">
                    {data.profile_name}
                  </p>
                  {data.verified ? <img
                    className="h-5 w-5 rounded-full overflow-hidden"
                    src="/src/assets/varifyBadge.png"
                    alt=""
                  /> : ""}
                </div>
              ))}
              <p className="text-[#17171770] text-3.5">
                {data.others.views} views
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
