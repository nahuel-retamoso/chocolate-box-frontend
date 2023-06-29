import { Flex, Text, Button } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';

const Error = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }

    return (
        <Flex align='center' justify='center' w='100%' h='100%' flexDirection='column'>
            <Text fontSize='xl' mb='4'>Hubo un error al procesar tu compra. Por favor, intenta nuevamente.</Text>
            <Button colorScheme="teal" onClick={() => handleClick()}>Volver a la página principal</Button>
        </Flex>
    )
}

export default Error;
