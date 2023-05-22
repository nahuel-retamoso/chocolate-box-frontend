import { Box } from "@chakra-ui/react";
import DraggableCharacter from "../DraggableCharacter";

const CharacterTab = ({ characters }) => {

    return (
        <Box
            bg="blackAlpha.100"
            display="grid"
            gridTemplateColumns="repeat(5, 1fr)"
            gap="0.6rem"
            p='8px'
        >
            {characters.map((character, index) => (
                <DraggableCharacter key={index} character={character} />
            ))}
        </Box>
    );
};

export default CharacterTab;
