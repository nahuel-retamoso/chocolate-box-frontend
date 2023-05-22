import { Box, Button, Flex } from "@chakra-ui/react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BoxSelector from "./Box/BoxSelector";
import CharacterSelector from "./Selector/CharacterSelector";
import TrashBin from "./TrashBin";
import { useState } from "react";

const BuilderContainer = () => {

  const [ boxes, setBoxes ] = useState([]);
  
  const gridSize = 5;
  const letters = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; // Tus letras
  const emojis = ["😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😇"];
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "=", "[", "]", "{", "}", "|", ";", ":", ",", ".", "<", ">", "/", "?", "~", "`"];

  
  const handleDrop = (targetId, letterId) => {
    console.log(`Dropped letter ${letterId} on cell ${targetId}`);
    // Aquí puedes manejar la lógica después de soltar la letra como guardar en base de datos
  };

  return (
    <Flex direction='column' align='center' justify='center' h='92vh' w='100%'>
      <DndProvider backend={HTML5Backend}>
        <Flex mt='40px' h='75%' w='100%' justify='center' bg='whiteAlpha.400'>
          <Flex w='50%' justify='flex-end'>
            <BoxSelector handleDrop={handleDrop} letters={letters} emojis={emojis} numbers={numbers} symbols={symbols}/>
          </Flex>
          <Flex w='50%'>
            <CharacterSelector letters={letters} emojis={emojis} numbers={numbers} symbols={symbols} />
          </Flex>
        </Flex>
        <Flex h='25%' w='100%' align='center' justify='center' gap='600px'>
          <TrashBin/>
          <Button>
            Agregar al carrito
          </Button>
        </Flex>
      </DndProvider>
    </Flex >
    );
  };
  
export default BuilderContainer;