// DropZone.jsx
import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { useDrop } from "react-dnd";
import DraggableCharacter from "../DraggableCharacter";

const DropZone = ({ id, onDrop, letters }) => {
  const [character, setCharacter] = useState(null);

  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: "letter",
    drop: (item, monitor) => {
      if (monitor.didDrop()) {
        return;
      }

      if (!character && item.source === 'characterSelector') {
        setCharacter(item.character);
        onDrop(id, item.character);
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }));

  return (
    <Flex
      h='70px'
      w='70px'
      align="center"
      justify='center'
      ref={drop}
      bg={canDrop ? "yellow.700" : isOver ? "red.200" : "whiteAlpha.800"}
    >
      {character !== null && (
          <DraggableCharacter onDelete={setCharacter} character={character} isInDropZone={true}/>
      )}
    </Flex>
  );
};

export default DropZone;

