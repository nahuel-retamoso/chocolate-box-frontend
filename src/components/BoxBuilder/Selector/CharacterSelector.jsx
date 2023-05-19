import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import DraggableLetter from "./DraggableLetter";

const CharacterSelector = ({ letters, emojis, numbers, symbols }) => {
    return (
        <Tabs isLazy variant='enclosed' ml='100px'>
            <TabList>
                <Tab>Letras</Tab>
                <Tab>Emojis</Tab>
                <Tab>Números</Tab>
                <Tab>Signos e Iconos</Tab>
            </TabList>

            <TabPanels>
                <TabPanel>
                    <Box
                        bg="blackAlpha.100"
                        display="grid"
                        gridTemplateColumns="repeat(7, 1fr)"
                        gap="1rem"
                    >
                        {letters.map((letter, index) => (
                            <DraggableLetter key={index} id={index} letter={letter} />
                        ))}
                    </Box>
                </TabPanel>
                <TabPanel>
                    <Box
                        bg="blackAlpha.100"
                        display="grid"
                        gridTemplateColumns="repeat(7, 1fr)"
                        gap="1rem"
                    >
                        {emojis.map((emoji, index) => (
                            <DraggableLetter key={index} id={index} letter={emoji} />
                        ))}
                    </Box>
                </TabPanel>
                <TabPanel>
                    <Box
                        bg="blackAlpha.100"
                        display="grid"
                        gridTemplateColumns="repeat(7, 1fr)"
                        gap="1rem"
                    >
                        {numbers.map((number, index) => (
                            <DraggableLetter key={index} id={index} letter={number} />
                        ))}
                    </Box>
                </TabPanel>
                <TabPanel>
                    <Box
                        bg="blackAlpha.100"
                        display="grid"
                        gridTemplateColumns="repeat(7, 1fr)"
                        gap="1rem"
                    >
                        {symbols.map((symbol, index) => (
                            <DraggableLetter key={index} id={index} letter={symbol} />
                        ))}
                    </Box>
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
};

export default CharacterSelector;
