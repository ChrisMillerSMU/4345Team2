import { useState } from "react";
import { motion, useScroll, useAnimationFrame } from "framer-motion";
import { Longcard } from './Longcard.jsx'

export function ParallaxText({ description, start, side, url }) {

  const [x, setX] = useState(0);
  const { scrollY } = useScroll();

  console.log(x, side, scrollY );
  useAnimationFrame(() => {
    if (side > 0) setX(Math.min(side * scrollY.get() - start, window.innerWidth / 6)); // Add Offset of Card
    if (side < 0) setX(Math.max(start + side * scrollY.get(), -window.innerWidth / 6));
  });

   return (
    <div className="text-primary text-8xl m-10">
      <motion.div animate={{ x }} transition={{ type: "spring" }}>
        <Longcard description={description} side={side} url={url}></Longcard>
      </motion.div>
    </div>
  );
}