import { Box, Flex, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import DropZone from "./DropZone";

const BoxSelector = ({ handleDrop, handleDelete, clearBoxes }) => {

    return (
            <Tabs variant='enclosed' isLazy onChange={() => clearBoxes()}>
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
                            gridTemplateColumns={`repeat(6, 1fr)`}
                            gap={1}
                        >
                            {Array.from({ length: 6 * 6 }, (_, i) => (
                                <DropZone key={i} id={i} boxSize='6x6' handleDelete={handleDelete} onDrop={handleDrop}/>
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
                                <DropZone key={i} id={i} boxSize='8x6' handleDelete={handleDelete} onDrop={handleDrop}/>
                            ))}
                        </Box>
                    </TabPanel>
                </TabPanels>
            </Tabs>
    );
};

export default BoxSelector;
