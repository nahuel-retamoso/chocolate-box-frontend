import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { useDrop } from "react-dnd";

const DropZone = ({ id, onDrop, letters }) => {

  const [letter, setLetter] = useState(null);

  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: "letter",
    drop: (item) => {
      if (!letter) {
        setLetter(item.id);
        onDrop(id, item.id);
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }));

  return (
    <Flex
      align="center"
      justify='center'
      ref={drop}
      bg={canDrop ? "yellow.700" : isOver ? "red.200" : "gray.200"}
      // Estilos adicionales para el componente
    >
      {/* Contenido de la celda */}
      {letter !== null ? letters[letter] : null}
    </Flex>
  );
};

export default DropZone;