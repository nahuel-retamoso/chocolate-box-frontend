import React from "react";
import { useDrop } from "react-dnd";
import { Box } from "@chakra-ui/react";

const TrashBin = ({ onTrash }) => {
    const [{ isOver, canDrop }, drop] = useDrop(() => ({
      accept: "letter",
      drop: (item) => {
        onTrash(item.sourceId);
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      }),
    }));
  
    return (
      <Box
        ref={drop}
        bg={canDrop ? "red.200" : isOver ? "blue.200" : "gray.200"}
        width="100px"
        height="100px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        fontWeight="bold"
        fontSize="2xl"
        borderRadius="md"
      >
        X
      </Box>
    );
  };

export default TrashBin;