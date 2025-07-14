import React from "react";
import LinkCardCircle from "@/components/LinkCardCircle";

const cards = [
  {
    link: "https://t.me/jiatscommunity",
    title: "telegram",
    icon: "Telegram",
  },
  {
    link: "https://x.com/jiatonsolana",
    title: "x",
    icon: "X",
  },
];

const Socials = () => {
  return (
    <div>
      <div className="my-16">
        <h2 className="font-stopbuck text-4xl sm:text-5xl lg:text-6xl text-duis text-shadow text-center">
          The Jiggleverse
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {cards.map((card, idx) => (
          <LinkCardCircle key={idx} props={card} />
        ))}
      </div>
    </div>
  );
};

export default Socials;
