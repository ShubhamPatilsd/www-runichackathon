import { PhotoGrid } from "@/components/PhotoGrid";
import { FiCalendar, FiMapPin } from "react-icons/fi";

export default function Home() {
  return (
    <div className="h-screen flex relative py-6">
      <div className="flex flex-col ">
        <main
          className={`md:flex max-w-8xl gap-[5%] mx-auto md:p-12 md:pb-6 lg:p-24 lg:pb-12`}
        >
          <div className="flex text-center flex-col items-center md:text-left md:w-1/2 md:pr-[5%]">
            <div>
              <h1
                className="text-xl lg:text-3xl outlineText text-transparent
              "
              >
                introducing...
              </h1>
              <h1 className="text-6xl lg:text-8xl mt-[5px] ml-[-5px]">RUNIC</h1>
              <div className="flex justify-center md:justify-normal">
                <div className="space-y-1 lg:space-y-3 mt-3 md:mt-[10px]">
                  <img
                    src="/blob.svg"
                    className="gridImage select-none absolute top-[20vh] left-[-1vw]"
                    style={{ zIndex: -2 }}
                  />
                  <div className="flex items-center space-x-4">
                    <FiCalendar className="text-xl md:text-2xl lg:text-2xl" />
                    <span className="text-md md:text-lg lg:text-xl">
                      Jan 20 - 21
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <FiMapPin className="text-xl md:text-2xl lg:text-2xl" />
                    <span className="text-md md:text-lg lg:text-xl">
                      Bay Area
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-6 space-y-1">
                <p>I'm interested:</p>
                <input
                  type="email"
                  placeholder="Email"
                  className="rounded-lg bg-white w-full border-2 border-[#7100E1] text-gray-700 px-6 py-3"
                />
              </div>
            </div>
          </div>
          <div className="md:w-1/2 p-6 md:p-0">
            {/* <PhotoGrid /> */}
            <img src="/photogrid.png" className="gridImage select-none" />
          </div>
        </main>
        <p className="max-w-4xl text-lg mx-auto text-center p-6 md:p-0">
          Runic is going to be an in-person hackathon in the Bay Area. Join us
          in 24 hours of hacking, workshops, and making connections. No prior
          coding experience? No problem! We'll provide all the support you need
          to learn coding and leave with a new skill.
        </p>
      </div>
      <div
        className="h-10 w-screen fixed bottom-0"
        style={{
          zIndex: 999,
          background:
            "linear-gradient(180deg, rgba(113, 0, 225, 0.00) 0%, #7100E1 100%)",
        }}
      ></div>
    </div>
  );
}
