import { Box, Flex, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import DropZone from "./DropZone";

const BoxSelector = ({ handleDrop, letters }) => {
    const gridSize = 5;
    return (
            <Tabs bg='red.900' variant='enclosed' isLazy>
                <TabList>
                    <Tab>Caja 6x6</Tab>
                    <Tab>Caja 6x8</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <Box
                            bg="whiteAlpha.700"
                            p="10px"
                            border="2px"
                            borderColor="whiteAlpha.900"
                            h="500px"
                            w="500px"
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
                            bg="whiteAlpha.700"
                            p="10px"
                            border="2px"
                            borderColor="whiteAlpha.900"
                            h="500px"
                            w="500px"
                            display="grid"
                            gridTemplateColumns={`repeat(6, 1fr)`}
                            gap={1}
                        >
                            {Array.from({ length: 6 * 8 }, (_, i) => (
                                <DropZone key={i} id={i} onDrop={handleDrop} letters={letters} />
                            ))}
                        </Box>
                    </TabPanel>
                </TabPanels>
            </Tabs>
    );
};

export default BoxSelector;
