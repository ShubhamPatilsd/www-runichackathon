export const SponsorBox = ({ header, text, imageUrl, link }: any) => {
  return (
    <div className="border-2 rounded-md border-accent border-dashed w-full aspect-square flex justify-center items-center">
      <div className="w-[70%]">
        <a href={link}>
          {/* <div className="rounded-md"> */}
          <img src={imageUrl} className="mx-auto w-full " />
          {/* <p className="text-2xl font-black text-center">{header}</p>
                <p className="text-cent">{text}</p> */}
          {/* </div> */}
        </a>
      </div>
    </div>
  );
};
