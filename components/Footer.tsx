export const Footer = () => {
  return (
    <div
      className="w-full px-4 py-2 bg-accent text-center relative"
      style={{ zIndex: 99999 }}
    >
      An event by{" "}
      <a href="https://thebapi.org" className="underline">
        the BAPI
      </a>
      , brought to you by Bay Area highschoolers.
    </div>
  );
};
