import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const squareVariants = {
    visible: { opacity: 1, transition: { duration: 1.5 } },
    hidden: { opacity: 0 }
};

interface MotionProps {
    children: React.ReactNode;
}

const Motion = ({ children }: MotionProps) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
          controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    return (
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={squareVariants}
          className="square"
        >{children}</motion.div>
      );
}

export default Motion;