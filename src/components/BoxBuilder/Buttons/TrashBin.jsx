import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DeleteIcon } from "@chakra-ui/icons";
import { Flex, Icon } from "@chakra-ui/react";
import { useDrop } from "react-dnd";

const TrashBin = () => {
    const [isDropped, setIsDropped] = useState(false);
    const [isOver, drop] = useDrop(() => ({
        accept: "letterTrash",
        drop: () => {
            setIsDropped(true);
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    }));

    useEffect(() => {
        if (isOver && isDropped) {
            const timer = setTimeout(() => {
                setIsDropped(false);
            }, 350); // Duration of the animation

            return () => clearTimeout(timer);
        }
    }, [isOver, isDropped]);

    const animations = {
        initial: { scale: 1 },
        animate: { scale: 1.1, rotate: [0, -5, 5, -5, 0] },
        transition: { duration: 0.3, ease: "easeInOut" },
    };

    return (
        <AnimatePresence>
            {isDropped && (
                <motion.div
                    ref={drop}
                    initial="initial"
                    animate="animate"
                    transition="transition"
                    {...animations}
                >
                    <Icon as={DeleteIcon} h='50px' w='70px' color='red.900' />
                </motion.div>
            )}
            {!isDropped && (
                <div ref={drop}>
                    <Icon as={DeleteIcon} h='50px' w='70px' color='red.900' />
                </div>
            )}
        </AnimatePresence>
    );
};

export default TrashBin;
