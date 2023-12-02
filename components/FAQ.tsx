import { FAQBox } from "./FAQBox";
const info = [
  {
    header: "What do I need?",
    text: "Your laptop, chargers, anything for your hack (hardware?), sleeping bags, water bottles, and an open mind.",
  },
  {
    header: "How much does it cost?",
    text: "Nothing! We’ll have meals, snacks, and beverages onsite at the hackathon, as well as swag, prizes, and fun mini-events.",
  },
  {
    header: "I'm not that good at coding...",
    text: "Runic is for hackers of all skill levels! We'll have workshops and other events so join us and let's learn together.",
  },
  {
    header: "What can I make",
    text: "Anything! Apps, art, sites, and hardware projects are all perfect for a hackathon.",
  },
  {
    header: "My parents are worried!",
    text: "We're here to help, ask them to reach out to us at help@runic.rsvp and we'll make sure to answer all their questions. Runic will be supervised by background checked adults.",
  },
  {
    header: "I have another question",
    text: "Reach out to help@runic.rsvp and we can work something out!",
  },
];
export const FAQ = () => {
  return (
    <div className="">
      <div className="mx-auto px-2 md:px-6 max-w-5xl">
        <h1 className="text-3xl md:text-4xl text-left px-2 mb-4">What else?</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2	px-2">
          {info.map((item) => (
            <FAQBox {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
