import { PhotoGrid } from "@/components/PhotoGrid";
import { FiCalendar, FiMapPin } from "react-icons/fi";

export default function Home() {
  return (
    <div className="h-screen flex  relative">
      <div className="flex flex-col ">
        <main className={`flex max-w-8xl gap-[5%] mx-auto p-24 pb-12`}>
          <div className="w-1/2 pr-[5%]">
            <h1
              className="text-3xl outlineText text-transparent
"
            >
              introducing...
            </h1>

            <h1 className="text-8xl mt-[5px] ml-[-5px]">RUNIC</h1>

            <div className="space-y-3 mt-[10px] relative">
              <img
                src="/blob.svg"
                className="gridImage select-none absolute top-[-6rem] left-[-5rem]"
                style={{ zIndex: -2 }}
              />
              <div className="flex items-center space-x-4">
                <FiCalendar size={28} />

                <span className="text-2xl">Jan 20 - 21</span>
              </div>

              <div className="flex items-center space-x-4">
                <FiMapPin size={28} />

                <span className="text-2xl">Bay Area</span>
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
          <div className="w-1/2">
            {/* <PhotoGrid /> */}
            <img src="/photogrid.png" className="gridImage select-none" />
          </div>
        </main>
        <p className="max-w-4xl text-lg mx-auto text-center">
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
