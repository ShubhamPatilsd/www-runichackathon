import { FaBrain, FaHammer, FaSmileBeam } from "react-icons/fa";

export const WhatIsHackathon = () => {
  return (
    <div>
      <div className="text-center mt-[6vh] md:mt-32 max-w-6xl mx-auto md:px-12 lg:px-32 lg:pr-[5%]">
        <h1
          className="text-4xl md:text-5xl lg:text-7xl
				"
        >
          Hackathon?
        </h1>
        <p className="text-xl md:text-2xl  md:p-0 text-gray-400">
          Don&apos;t worry, there&apos;ll be no hacking involved.
        </p>
        <div className="text-xl md:text-2xl mt-4">
          A <span className="text-purple-400 font-bold">hackathon</span> is a
          social event where people get together to code{" "}
          <span className="text-orange-400 font-bold">awesome</span> projects in
          a <span className="text-red-400 font-bold">limited time</span>. Our
          hackathon will welcome beginners, experts, and everybody in between!
        </div>

        <div className="mt-5 px-4 md:px-0 md:mt-[5vh] space-y-6 mx-auto max-w-[800px]">
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
    </div>
  );
};
