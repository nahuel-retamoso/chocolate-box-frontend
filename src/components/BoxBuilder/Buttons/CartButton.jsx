import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from "@chakra-ui/react";
import { BsCartPlusFill } from "react-icons/bs";

const CartButton = ({ isBoxComplete, addToCart }) => {
    const [isClicked, setIsClicked] = useState(false);
    const [isComplete, setIsComplete] = useState(false);

    const animations = {
        complete: {
            initial: { scale: 1 },
            animate: { scale: 1.2, color: 'green' },
            transition: { duration: 0.3, ease: "easeInOut" }
        },
        incomplete: {
            initial: { scale: 1, x: 0 },
            animate: { scale: 1.1, color: 'red', x: [0, -4, 4, -4, 0] },
            transition: { duration: 0.3, ease: "easeInOut" }
        },
    };

    const handleClick = () => {
        setIsClicked(true);
        const complete = isBoxComplete();
        setIsComplete(complete);

        if (complete) { // Ahora nos basamos en el resultado de `isBoxComplete()`
            addToCart();
        }
    };

    useEffect(() => {
        if (isClicked) {
            const timer = setTimeout(() => {
                setIsClicked(false);
            }, 400); // Duration of the animation

            return () => clearTimeout(timer);
        }
    }, [isClicked]);

    const currentAnimation = isComplete ? animations.complete : animations.incomplete;

    return (
        <AnimatePresence>
            {isClicked && (
                <motion.div
                    onClick={handleClick}
                    initial="initial"
                    animate="animate"
                    transition="transition"
                    {...currentAnimation}
                >
                    <Icon as={BsCartPlusFill} h='45px' w='45px' />
                </motion.div>
            )}
            {!isClicked && (
                <div onClick={handleClick}>
                    <Icon as={BsCartPlusFill} color='red.900' h='45px' w='45px' />
                </div>
            )}
        </AnimatePresence>
    );
};

export default CartButton;
