import { getHeroesByPublisher } from "../helpers";
import { HeroCard } from "./";
import { useMemo } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div
      className="row rows-cols-1 row-cols-md-3 g-3 mb-3 container"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {heroes.map((e) => (
        <motion.div className="" key={e.id}>
          <HeroCard {...e} className="item" variants={item} />
        </motion.div>
      ))}
    </motion.div>
  );
};

HeroList.propTypes = {
  publisher: PropTypes.string.isRequired,
};
