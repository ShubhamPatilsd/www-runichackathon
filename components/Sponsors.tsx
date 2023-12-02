import { FaPlus } from "react-icons/fa6";
import { SponsorBox } from "./SponsorBox";

export const Sponsors = () => {
  return (
    <div className="">
      <div className="mx-auto px-2 md:px-6 max-w-5xl">
        <h1 className="text-3xl md:text-4xl text-left px-2 mb-4">Sponsors</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4	px-2">
          <SponsorBox
            header={"HCB"}
            text={"Allows us to manage our finances and make Runic work!"}
            imageUrl={`https://assets.hackclub.com/hcb-dark.svg`}
            link={"https://hcb.hackclub.com"}
          />
          {/* <a href="mailto:sponsor@runic.rsvp"> */}
          <div className="flex-col flex items-center p-6 w-full border-2 rounded-md border-accent border-dashed h-full aspect-square">
            <FaPlus className="text-[9vw] md:text-[5vw] lg:text-[4vw]" />
            <p className="text-center mt-4">
              Interested in sponsoring & helping create a magical programming
              experience for teenagers in the Bay Area? Drop us a line on{" "}
              <a href="mailto:sponsor@runic.rsvp" className="underline">
                email
              </a>{" "}
              or{" "}
              <a
                href="https://hcb.hackclub.com/donations/start/runic"
                className="underline"
              >
                donate directly!
              </a>
            </p>
          </div>
          {/* </a> */}
        </div>
      </div>
    </div>
  );
};
