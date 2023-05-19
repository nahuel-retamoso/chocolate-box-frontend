import { Button, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <Flex h='92vh' w='100%' bg='red.900' justify='center' align='center'>
            <Flex direction='column' align='center'>
                <Text color='whiteAlpha.800' fontSize='4xl'>Arma tu caja de chocolates</Text>
            </Flex>
        </Flex>
    )
}

export default Home;