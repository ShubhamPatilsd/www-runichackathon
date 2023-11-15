export const PhotoGrid = () => {
  return (
    <div className="flex flex-col gap-10 w-full h-full">
      <div className="flex gap-10 h-[33%]">
        {/* <div className="bg-[url('/hackers.png')] w-1/2"></div> */}
        <div className="bg-[url('/hackers.png')] rounded-md object-cover w-1/2  relative">
          {/* <img src="/hackers.png" className="opacity-0" /> */}
          <h1 className="text-6xl text-center tracking-[-7px]">
            100
            <br />
            <span className="text-4xl tracking-[-4px]">hackers</span>
          </h1>
        </div>

        <div className="bg-[url('/hackers.png')] rounded-md object-cover w-1/2 ">
          <img src="/hours.png" className="w-1/2  opacity-0" />
        </div>
        {/* <div className="bg-[url('/hours.png')] w-1/2 h-full"></div> */}
      </div>
      <div className="bg-[url('/fun.png')] rounded-md h-[67%] object-cover ">
        {/* <img src="/fun.png" className="w-full opacity-0" /> */}
      </div>
    </div>
  );
};
