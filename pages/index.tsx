import { PhotoGrid } from "@/components/PhotoGrid";
import { FiCalendar, FiMapPin } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";
import Lottie from "lottie-react";
import Image from "next/image";
import p1 from "../public/p1.png";
import p2 from "../public/p2.png";
import p3 from "../public/p3.png";
import { useEffect, useState, useRef } from "react";
import splash from "../public/splash2.json";

export function useIsVisible(ref: any) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIntersecting(entry.isIntersecting);
      }
    });

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref.current]);

  return isIntersecting;
}

export default function Home() {
  const loadRef = useRef(null);
  const isVisible = useIsVisible(loadRef);
  const [showTitle, setShowTitle] = useState(1);
  useEffect(() => {
    const seen = localStorage.getItem("titleSeen");
    if (seen != null) {
      setShowTitle(0);
      return;
    }
    const media = window.matchMedia(
      "(max-aspect-ratio: 18/9) and (min-aspect-ratio: 14/9)"
    );
    if (media.matches !== true || seen != null) {
      setShowTitle(0);
    } else {
      setShowTitle(1);
      setTimeout(() => {
        setShowTitle(0);
        localStorage.setItem("titleSeen", "true");
      }, 7400);
    }
    const listener = () => {
      if (media.matches !== true || seen != null) {
        setShowTitle(0);
      } else {
        localStorage.setItem("titleSeen", "true");
        setShowTitle(1);
        setTimeout(() => {
          setShowTitle(0);
        }, 7400);
      }
    };
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, []);

  return (
    <div className="h-screen flex relative py-6">
      <Lottie
        animationData={splash}
        className={`flex justify-center items-center ${
          showTitle < 1 ? "hidden" : "block"
        }`}
        loop={false}
      />
      <div
        ref={loadRef}
        className={`transition-opacity ease-in duration-700  ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${showTitle > 0 ? "hidden" : "block"}`}
      >
        <div className={`flex flex-col`}>
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
                <h1 className="text-6xl lg:text-8xl mt-[5px] ml-[-5px]">
                  RUNIC
                </h1>
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
                <div className="mt-6 flex flex-col space-y-1">
                  <p>I'm interested:</p>
                  <a
                    href="https://register.runic.rsvp"
                    className="flex space-x-2 items-center justify-center underline text-center rounded-md bg-[#7100E1] font-bold text-lg hover:bg-[#3C0177] transition w-full py-3"
                  >
                    <span>Register</span>
                    <HiOutlineExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 p-6 md:p-0">
              {/* <PhotoGrid /> */}
              <img src="/photogrid.png" className="gridImage select-none" />
            </div>
          </main>
          <main
            className={` max-w-full mt-8 gap-[5%]  md:px-12 md:pb-6 lg:px-24 lg:pb-12`}
          >
            <p className="max-w-4xl text-lg lg:text-2xl mx-auto text-center px-6 md:p-0">
              Runic is going to be an in-person hackathon in the Bay Area. Join
              us in 24 hours of hacking, workshops, and making connections. No
              prior coding experience? No problem! We'll provide all the support
              you need to learn coding and leave with a new skill.
            </p>

            <div className="text-center mt-32  px-12 lg:px-32 lg:pr-[5%]">
              <h1
                className=" text-5xl lg:text-7xl
				"
              >
                Hackathon?
              </h1>
              <p className="text-2xl  md:p-0 text-gray-400">
                Don&apos;t worry, there&apos;ll be no hacking involved.
              </p>
              <div className="text-xl md:text-2xl mt-4">
                A <span className="text-purple-400 font-bold">hackathon</span>{" "}
                is a social event where people get together to code{" "}
                <span className="text-orange-400 font-bold">awesome</span>{" "}
                projects in a{" "}
                <span className="text-red-400 font-bold">limited time</span>.
                Our hackathon will welcome beginners, experts, and everybody in
                between!
                <div className="flex items-center mt-8 justify-center">
                  <div className="grid  gap-4">
                    <div className="grid grid-cols-1  gap-4 my-auto">
                      <div>
                        <img
                          className="w-auto max-w-full rounded-lg "
                          src="/p1.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src="/p2.png"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="h-auto max-w-full float-right rounded-lg"
                          src="/p3.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        {/*
        <div
          className="h-10 w-screen fixed bottom-0"
          style={{
            zIndex: 999,
            background:
              "linear-gradient(180deg, rgba(113, 0, 225, 0.00) 0%, #7100E1 100%)",
          }}
        ></div> */}
      </div>
    </div>
  );
}
