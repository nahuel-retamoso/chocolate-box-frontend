// DropZone.jsx
import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { useDrop } from "react-dnd";
import DraggableCharacter from "../DraggableCharacter";

const DropZone = ({ id, onDrop, boxSize, handleDelete }) => {
  const [character, setCharacter] = useState(null);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "letter",
    drop: (item, monitor) => {
      if (monitor.didDrop()) {
        return;
      }

      if (!character && item.source === 'characterSelector') {
        setCharacter(item.character);
        onDrop(id, item.character, boxSize);
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const trashBinLetter = () => {
    setCharacter(null);
    handleDelete(id, boxSize);
  }

  return (
    <Flex
      h='70px'
      w='70px'
      align="center"
      justify='center'
      ref={drop}
      bg={isOver ? "blackAlpha.200" : 'whiteAlpha.800'}
    >
      {character !== null && (
          <DraggableCharacter onDelete={trashBinLetter} character={character} isInDropZone={true}/>
      )}
    </Flex>
  );
};

export default DropZone;

