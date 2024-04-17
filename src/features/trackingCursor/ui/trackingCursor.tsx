import { motion } from "framer-motion";
import useMouse from "@react-hook/mouse-position";

export const TrackingCursor = ({
  layoutRef,
}: {
  layoutRef: React.RefObject<HTMLDivElement>;
}) => {
  {
    const mouse = useMouse(layoutRef, {
      enterDelay: 100,
      leaveDelay: 100,
    });

    const mouseXPosition = mouse.clientX ?? 0;
    const mouseYPosition = mouse.clientY ?? 0;

    const variants = {
      default: {
        opacity: 1,
        height: 20,
        width: 20,
        fontSize: "16px",
        borderRadius: "50%",
        backgroundColor: "#ffffff",
        x: mouseXPosition,
        y: mouseYPosition,
        transition: {
          type: "spring",
          mass: 0.5,
        },
      },
    };

    const spring = {
      type: "spring",
      stiffness: 500,
      damping: 28,
    };

    return (
      <motion.div
        ref={layoutRef}
        variants={variants}
        className="circle z-10 absolute left-0 top-0"
        animate="default"
        transition={spring}
      />
    );
  }
};
