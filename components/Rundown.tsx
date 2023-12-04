import { FaExternalLinkAlt } from "react-icons/fa";

export const Rundown = () => {
  return (
    <div className="p-6 md:p-8 lg:p-12 bg-accent">
      <div className="mx-auto">
        <h1 className="text-3xl md:text-4xl text-center">Details</h1>

        <div className="mt-4 max-w-3xl grid md:grid-cols-2 gap-2 mx-auto">
          <div className="">
            <div className=" px-6 py-4 bg-stone-50 border-black border text-black">
              <p className="font-black underline text-lg">Date & Time</p>
              <p>
                Runic will start at 12pm on January 20th and end at 12pm on
                January 21st.
              </p>
            </div>
            <div className="mt-2 px-6 py-4 bg-stone-50 border-black border text-black">
              <p className="font-black underline text-lg">Eligibility</p>
              <p>
                All highschoolers and middleschoolers are welcome to attend and
                have an amazing time at Runic!
              </p>
            </div>
          </div>
          <img
            src="https://cloud-92szndnmb-hack-club-bot.vercel.app/0image.png"
            className="object-cover h-full border border-black hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,0.77)]   transition hover:-translate-x-1 hover:-translate-y-1"
          />
        </div>

        <a href="https://register.runic.rsvp">
          <div className="flex items-center max-w-3xl mx-auto mt-4 space-x-2 justify-center px-4 py-2 bg-white text-accent border border-white hover:bg-transparent hover:text-white transition rounded-md w-full text-lg underline">
            <p>Register</p>

            <FaExternalLinkAlt size={15} />
          </div>
        </a>
      </div>
    </div>
  );
};
