"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

let interval: any;

type Card = {
  id: number;
  name: string;
  title: string;
  img: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative h-60 w-60 sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolut rounded-3xl p-4 shadow-xl border border-[rgb(47,5,107)] shadow-white/[0.05] flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
              height: "100%",
              width: "100%",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <div className="relative z-20 text-[8px] sm:text-[10px] md:text-[12px] leading-[1.6] text-gray-100 font-normal">
              {card.content}
            </div>
            <div className="relative z-20 mt-6 flex flex-row items-center">
              <span className="px-2">
                <Image
                  src={card.img}
                  alt={card.title}
                  width={40}
                  height={50}
                  className="w-10 h-12 sm:w-12 sm:h-14 md:w-14 md:h-16"
                />
              </span>
              <div>
                <p className="text-sm sm:text-base md:text-lg leading-[1.6] text-white font-normal">
                  {card.name}
                </p>
                <p className="text-neutral-400 font-normal text-[9px] sm:text-[11px] md:text-[13px]">
                  {card.title}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
