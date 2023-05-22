import { Box, Flex, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import DropZone from "./DropZone";

const BoxSelector = ({ handleDrop, letters, emojis, numbers, symbols }) => {
    const gridSize = 6;
    return (
            <Tabs variant='enclosed' isLazy>
                <TabList>
                    <Tab>Caja 6x6</Tab>
                    <Tab>Caja 6x8</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <Box
                            bg="blackAlpha.200"
                            p="10px"
                            border="2px"
                            borderColor="whiteAlpha.900"
                            display="grid"
                            gridTemplateColumns={`repeat(${gridSize}, 1fr)`}
                            gap={1}
                        >
                            {Array.from({ length: gridSize * gridSize }, (_, i) => (
                                <DropZone key={i} id={i} onDrop={handleDrop} letters={letters} />
                            ))}
                        </Box>
                    </TabPanel>
                    <TabPanel>
                        <Box
                            bg="blackAlpha.200"
                            p="10px"
                            border="2px"
                            borderColor="whiteAlpha.900"
                            display="grid"
                            gridTemplateColumns={`repeat(8, 1fr)`}
                            gap={1}
                        >
                            {Array.from({ length: 8 * 6 }, (_, i) => (
                                <DropZone key={i} id={i} onDrop={handleDrop} letters={letters} emojis={emojis} numbers={numbers} symbols={symbols}/>
                            ))}
                        </Box>
                    </TabPanel>
                </TabPanels>
            </Tabs>
    );
};

export default BoxSelector;
