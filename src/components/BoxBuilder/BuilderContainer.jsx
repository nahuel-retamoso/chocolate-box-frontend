import { Flex } from "@chakra-ui/react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BoxSelector from "./Box/BoxSelector";
import CharacterSelector from "./Selector/CharacterSelector";

const BuilderContainer = () => {
  
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
    <Flex align='center' justify='center' h='92vh' w='100%' bg='red.900'>
      <DndProvider backend={HTML5Backend}>
        <BoxSelector handleDrop={handleDrop} letters={letters} />
        <CharacterSelector letters={letters} emojis={emojis} numbers={numbers} symbols={symbols} />
      </DndProvider>
    </Flex >
    );
  };
  
export default BuilderContainer;