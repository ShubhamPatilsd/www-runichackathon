import { FaBrain, FaHammer, FaSmileBeam } from "react-icons/fa";

export const WhatIsHackathon = () => {
  return (
    <div>
      <div className="w-screen text-[2vw] flex items-center justify-center border-t border-b border-accent py-2">
        <h1 className="text-xl md:text-2xl lg:text-4xl outlineText text-transparent">
          What is a hackathon?
        </h1>
      </div>

      <div className="p-2 md:p-6 bg-accent border border-accent mx-auto max-w-4xl mt-5 md:mt-[5vh] shadow-xl shadow-accent">
        <h4 className=" text-xl italic">
          hack·a·thon (n.) <br /> <br />
          an <span className="underline uppercase">awesome</span> event where
          people make cool ideas real, learn new skills, and form lasting
          friendships with other likeminded people while hacking (building
          things) into the night.
        </h4>
      </div>

      <div className="mt-5 md:mt-[5vh] space-y-6 mx-auto max-w-[800px]">
        <div className="grid grid-cols-1 gap-6">
          <div className="border-2 border-accent p-4 md:p-8 space-y-3">
            <div className="flex items-center space-x-3">
              <FaBrain size={30} className="text-accent" />
              <p className="text-xl font-black">Learn Something New</p>
            </div>
            <p>
              At Runic, you'll have the opportunity to participate in and host
              workshops among peers, acquire valuable experience, forge
              connections, and explore your potential. Engage with new
              individuals, receive assistance from fellow participants, and
              contribute to the support network within the coding community.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div className="border-2 border-accent p-4 md:p-8 space-y-3">
            <div className="flex items-center space-x-3">
              <FaHammer size={30} className="text-accent" />
              <p className="text-xl font-black">Build Amazing Projects</p>
            </div>
            <p>
              At Runic, you'll have the opportunity to participate in and host
              workshops among peers, acquire valuable experience, forge
              connections, and explore your potential. Engage with new
              individuals, receive assistance from fellow participants, and
              contribute to the support network within the coding community.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <div className="border-2 border-accent p-4 md:p-8 space-y-3">
            <div className="flex items-center space-x-3">
              <FaSmileBeam size={30} className="text-accent" />
              <p className="text-xl font-black">Create Amazing Memories</p>
            </div>
            <p>
              At Runic, you'll have the opportunity to participate in and host
              workshops among peers, acquire valuable experience, forge
              connections, and explore your potential. Engage with new
              individuals, receive assistance from fellow participants, and
              contribute to the support network within the coding community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
