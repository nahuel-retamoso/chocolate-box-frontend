import { Box } from "@chakra-ui/react";
import DraggableCharacter from "../DraggableCharacter";

const CharacterTab = ({ characters }) => {

    return (
        <Box
            display="grid"
            gridTemplateColumns="repeat(5, 1fr)"
            gap="0.35rem"
            p='8px'
        >
            {characters.map((character, index) => (
                <DraggableCharacter key={index} character={character} />
            ))}
        </Box>
    );
};

export default CharacterTab;
