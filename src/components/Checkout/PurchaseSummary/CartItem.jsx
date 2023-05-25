import { Button, Flex, Text } from "@chakra-ui/react"

const CartItem = ({ box, boxId, remove }) => {
    return (
        <Flex w='full' bg={'#876445'} justify='space-between' align='center' mt='5px' px='25px' py='15px' borderRadius='md' textColor='whiteAlpha.800' key={boxId}>
            <Text fontSize='xl' >Nombre: {box.name}</Text>
            <Text fontSize='xl'>Tamanio: {box.boxSize}</Text>
            <Button onClick={() => remove(box.id)} bg='red.600' textColor='whiteAlpha.800' fontSize='xl' _hover={{ textColor: 'blackAlpha.800', bg: 'red.50' }}>X</Button>
        </Flex>
    )
}

export default CartItem