import { Box, Flex, Text } from "@chakra-ui/react";
import { useDrag } from "react-dnd";

const DraggableLetter = ({ letter, id }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "letter",
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <Flex
  align="center"
  h="70px"
  w="70px"
  justify="center"
  bg="yellow.900"
  ref={drag}
  opacity={isDragging ? 0.5 : 1}
  borderRadius="4px"
  boxShadow="0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)"
  position="relative"
>
  {/* Brillo en la parte superior del cuadrado de chocolate */}
  <Box
    position="absolute"
    top="0"
    left="0"
    right="0"
    height="10px"
    bgGradient="linear(to-b, rgba(255, 255, 255, 0.5) 0%, transparent 100%)"
    borderRadius="4px 4px 0 0"
  />

  {/* Letra o número en el medio */}
  <Text fontSize="2xl" fontWeight="bold" color="yellow.900" textShadow="1px 1px 1px rgba(0, 0, 0, 0.5)">
  {letter}
</Text>
</Flex>

  );
};

export default DraggableLetter;