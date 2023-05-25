import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import CharacterTab from "./CharacterTab";

const CharacterSelector = ({ letters, emojis, numbers, symbols }) => {
    return (
        <Tabs isLazy variant='enclosed'>
            <TabList>
                <Tab>Letras</Tab>
                <Tab>Emojis</Tab>
                <Tab>Números</Tab>
                <Tab>Signos e Iconos</Tab>
            </TabList>

            <TabPanels>
                <TabPanel>
                    <CharacterTab characters={letters} />
                </TabPanel>
                <TabPanel>
                    <CharacterTab characters={emojis} />
                </TabPanel>
                <TabPanel>
                    <CharacterTab characters={numbers} />
                </TabPanel>
                <TabPanel>
                    <CharacterTab characters={symbols} />
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
};

export default CharacterSelector;
