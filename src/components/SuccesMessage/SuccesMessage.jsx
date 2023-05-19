import { Flex, Text } from "@chakra-ui/react"

const SuccesMessage = () => {
    return (
        <Flex flexDirection='column' color='whiteAlpha.800' align='center' justify='center' w='full' h='full'>
            <Text fontSize='3xl'>Tu compra se realizo con exito !</Text>
            <Text fontSize='xl'>El id de tu pedido es #4569k54j3k5. Te mandamos un email con los detalles. Cuando salga el envio te mandaremos un email</Text>
        </Flex>
    )
}

export default SuccesMessage