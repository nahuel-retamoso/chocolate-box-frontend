// DropZone.jsx
import { Flex } from "@chakra-ui/react";
import { useDrop } from "react-dnd";
import DraggableCharacter from "../DraggableCharacter";

const DropZone = ({ id, onDrop, boxSize, handleDelete, boxValue }) => {
  
  const letter = boxValue?.[boxSize]?.letters?.[id] || null;

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "letter",
    drop: (item, monitor) => {
      if (monitor.didDrop()) {
        return;
      }

      if (!letter && item.source === 'characterSelector') {
        onDrop(id, item.character, boxSize);
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const trashBinLetter = () => {
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
      {letter !== null && (
          <DraggableCharacter onDelete={trashBinLetter} character={letter} isInDropZone={true}/>
      )}
    </Flex>
  );
};

export default DropZone;
