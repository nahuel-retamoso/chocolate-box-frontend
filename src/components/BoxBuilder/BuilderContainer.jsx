import { Box, Button, Flex, Icon, Input, VStack } from "@chakra-ui/react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BoxSelector from "./Box/BoxSelector";
import CharacterSelector from "./Selector/CharacterSelector";
import TrashBin from "./Buttons/TrashBin";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";
import ResetButton from "./Buttons/ResetButton";
import CartButton from "./Buttons/CartButton";

const BuilderContainer = () => {

  const { addToCart } = useContext(CartContext);

  const [boxes, setBoxes] = useState({});
  const [currentSize, setCurrentSize] = useState();

  const letters = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; // Tus letras
  const emojis = ["😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😇"];
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "=", "[", "]", "{", "}", "|", ";", ":", ",", ".", "<", ">", "/", "?", "~", "`"];


  const handleDrop = (targetId, character, boxSize) => {
    setCurrentSize(boxSize)
    console.log(`Dropped letter ${character} on cell ${targetId} of boxSize ${boxSize}`);

    setBoxes(prevBoxes => {
      const newBoxes = { ...prevBoxes };

      if (Object.keys(newBoxes).length === 0) {
        const newId = Date.now().toString();
        newBoxes[newId] = { id: newId, boxSize: boxSize, name: `Caja ${boxSize}`, letters: {} };
      }

      // Get the first box's key in the state.
      const firstBoxKey = Object.keys(newBoxes)[0];

      newBoxes[firstBoxKey].letters[targetId] = character;
      return newBoxes;
    });
  };



  const handleNameChange = (newName) => {
    setBoxes(prevBoxes => {
      const newBoxes = { ...prevBoxes };
      Object.keys(newBoxes).forEach(boxSize => {
        if (newBoxes[boxSize]) {
          newBoxes[boxSize].name = newName;
        }
      });
      return newBoxes;
    });
  };


  const handleDelete = (targetId, boxSize) => {
    console.log(`Deleting letter from cell ${targetId} of boxSize ${boxSize}`);

    setBoxes(prevBoxes => {
      const newBoxes = { ...prevBoxes };

      // Get the first box's key in the state.
      const firstBoxKey = Object.keys(newBoxes)[0];

      if (newBoxes[firstBoxKey] && newBoxes[firstBoxKey].letters) {
        delete newBoxes[firstBoxKey].letters[targetId];
      }

      return newBoxes;
    });
  };


  const clearBoxes = () => {
    setBoxes({});
  };

  useEffect(() => {
    console.log(boxes);
  }, [boxes]);

  const isBoxComplete = () => {
    // Assuming boxes only has one box at a time.
    const currentBox = Object.values(boxes)[0];

    if (!currentBox || !currentBox.letters) {
      console.log('No se ha seleccionado ninguna caja');
      return false; // No current box, so it's not complete.
    }

    const letterCount = Object.keys(currentBox.letters).length;

    // Parse the dimensions of the box from the boxSize string.
    const [width, height] = currentBox.boxSize.split('x').map(Number);
    const boxCapacity = width * height;

    // The box is complete if the number of letters equals its capacity.
    return letterCount === boxCapacity;
  };



  const addButton = () => {
    if (isBoxComplete()) {
      addToCart(boxes);
      clearBoxes();
      console.log('Agregado al carrito');
    } else {
      console.log('La caja no esta completa');
    }
  }

  return (
    <Flex direction='column' align='center' justify='center' h='85vh' w='100%'>
      <DndProvider backend={HTML5Backend}>
        <Flex align='end' h='75%' w='100%' justify='center'>
          <Flex direction='column' w='45%' align='flex-end'>
            <BoxSelector boxValue={boxes} clearBoxes={clearBoxes} handleDelete={handleDelete} handleDrop={handleDrop} />
          </Flex>
          <VStack align='center' justify='center' spacing='16' h='100%' pl='50px'>
            <TrashBin />
            <ResetButton clearBoxes={clearBoxes}/>
            <CartButton isBoxComplete={isBoxComplete} addToCart={addButton}/>
          </VStack>
          <Flex w='40%' pl='40px'>
            <CharacterSelector letters={letters} emojis={emojis} numbers={numbers} symbols={symbols} />
          </Flex>
        </Flex>
        <Flex h='25%' w='100%' align='center' justify='center' gap='60px'>
          <Input variant='filled' placeholder="Como vas a llamar a esta caja?" w='400px' onChange={(e) => handleNameChange(e.target.value)} />
        </Flex>
      </DndProvider>
    </Flex >
  );
};

export default BuilderContainer;