import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import Image from "next/image";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description1: string;
    description2: string;
    description3: string;
    techstack: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <motion.div
      className="h-[25rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100"
              >
                ⚡ {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg text-slate-300 max-w-lg mt-10"
              >
                - {item.description1}
                <br />- {item.description2}
                <br />- {item.description3}
                <br />- Techstack: {item.techstack}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <motion.div
        className={cn(
          "hidden lg:block h-[15rem] w-[30rem] rounded-md bg-white sticky top-10 overflow-hidden",
          contentClassName
        )}
      >
        <Image
          src={`/workexperience/${activeCard + 1}.png`} // Assuming your images are named 1.png, 2.png, 3.png, ...
          alt={`Image ${activeCard}`}
          layout="fill"
          objectFit="cover" // Ensure the entire container is covered by the image
        />
      </motion.div>
    </motion.div>
  );
};
