import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RepeatIcon } from "@chakra-ui/icons";

const ResetButton = ({ clearBoxes }) => {
    const [isClicked, setIsClicked] = useState(false);
    const animations = {
        initial: { rotate: 0 },
        animate: { rotate: -360, scale: 1.1 },
        transition: { duration: 0.5, ease: "easeInOut" }
    };

    const handleResetClick = () => {
        setIsClicked(true);
        clearBoxes();
    };

    useEffect(() => {
        if (isClicked) {
            const timer = setTimeout(() => {
                setIsClicked(false);
            }, 600); // Duration of the animation

            return () => clearTimeout(timer);
        }
    }, [isClicked]);

    return (
        <AnimatePresence>
            {isClicked && (
                <motion.div
                    initial="initial"
                    animate="animate"
                    transition="transition"
                    {...animations}
                >
                    <RepeatIcon h='45px' w='45px' color='red.900' />
                </motion.div>
            )}
            {!isClicked && (
                <div onClick={handleResetClick}>
                    <RepeatIcon h='45px' w='45px' color='red.900' />
                </div>
            )}
        </AnimatePresence>
    );
};

export default ResetButton;
