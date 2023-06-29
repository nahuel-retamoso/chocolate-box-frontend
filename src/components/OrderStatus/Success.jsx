import { Button, Flex, Text } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';

const Success = ({email}) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }

    return (
        <Flex flexDirection='column' color='blackAlpha.800' align='center' justify='center' w='full' h='full'>
            <Text fontSize='3xl'>Tu compra se realizo con exito!</Text>
            <Text fontSize='xl'>Te mandamos un email con los detalles de tu compra a {email}.</Text>
            <Button colorScheme="teal" m='20px' onClick={() => handleClick()}>Volver a la página principal</Button>
        </Flex>
    )
}

export default Success;