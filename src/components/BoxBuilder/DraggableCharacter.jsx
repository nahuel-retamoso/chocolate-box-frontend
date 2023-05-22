import { Box, Flex, Text } from "@chakra-ui/react";
import { useDrag } from "react-dnd";

const DraggableCharacter = ({ isInDropZone, character, onDelete }) => {
  
  const [{ isDragging }, drag] = useDrag(() => ({
    type: isInDropZone ? "letterTrash" : "letter",
    item: { character,  source: isInDropZone ? 'dropZone' : 'characterSelector' },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    end: (item, monitor) => {
      if (isInDropZone && monitor.didDrop()) {
        onDelete();
        console.log(item.character + ' borrado')
      }
    },
  }));

  return (
    <Flex
      align="center"
      h="70px"
      w="70px"
      justify="center"
      bg="yellow.900"
      opacity={isDragging ? 0.5 : 1}
      borderRadius="4px"
      boxShadow="0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)"
      position="relative"
      ref={drag}
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        height="10px"
        bgGradient="linear(to-b, rgba(255, 255, 255, 0.5) 0%, transparent 100%)"
        borderRadius="4px 4px 0 0"
      />
      <Text fontSize="2xl" fontWeight="bold" color="yellow.900" textShadow="1px 1px 1px rgba(0, 0, 0, 0.5)">
        {character}
      </Text>
    </Flex>
  );
};

export default DraggableCharacter;



