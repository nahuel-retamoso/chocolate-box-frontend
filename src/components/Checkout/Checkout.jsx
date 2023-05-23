import { Button, Flex, HStack, Input, InputGroup, InputLeftAddon, Text, VStack } from "@chakra-ui/react";
import PaymentButton from "./PaymentButton";
import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";

const Checkout = () => {
    const { cart, clearCart } = useContext(CartContext);
    console.log(cart)
    return (
        <Flex justify='center' w='full' h='92vh'>
            <Flex w='50%' direction="column" align='center' pt='80px' overflow='hidden'>
                <Text fontSize='2xl' color='blackAlpha.800'>Resumen de la compra</Text>
                <VStack spacing='20px' align='flex-start' w='full' h='full' px='80px' pt='30px'>
                    {cart.map((item) => {
                        const boxId = Object.keys(item)[0];
                        const box = item[boxId];
                        return (
                            <Flex w='full' bg={'#876445'} justify='space-between' align='center' mt='5px' px='25px' py='15px' borderRadius='md' textColor='whiteAlpha.800' key={boxId}>
                                <Text fontSize='xl' >Nombre: {box.name}</Text>
                                <Text fontSize='xl'>Tamanio: {box.boxSize}</Text>
                                <Button bg='red.600' textColor='whiteAlpha.800' fontSize='xl' _hover={{textColor:'blackAlpha.800', bg:'red.50'}}>X</Button>
                            </Flex>
                        )
                    })}
                </VStack>
            </Flex>
            <Flex w='50%' h='100%' direction="column" px='60px' pt='30px'>
                <VStack spacing='2'>
                <Text fontSize='2xl' color='blackAlpha.800'>Datos del destinatario</Text>
                <InputGroup>
                    <InputLeftAddon children='Nombre' />
                    <Input type='text' />
                </InputGroup>
                <InputGroup>
                    <InputLeftAddon children='Email' />
                    <Input type='text' />
                </InputGroup>
                <InputGroup>
                    <InputLeftAddon children='Numero de Telefono' />
                    <Input type='text' />
                </InputGroup>
                </VStack>
                <VStack spacing='2' mt='20px'>
                <Text fontSize='2xl' color='blackAlpha.800'>Domicilio del destinatario</Text>
                <InputGroup>
                    <InputLeftAddon children='Calle' />
                    <Input type='text' />
                </InputGroup>
                <InputGroup>
                    <InputLeftAddon children='Numero' />
                    <Input type='text' />
                </InputGroup>
                <InputGroup>
                    <InputLeftAddon children='Departamento' />
                    <Input type='text' placeholder="Opcional" />
                </InputGroup>
                <InputGroup>
                    <InputLeftAddon children='Barrio' />
                    <Input type='text' placeholder="Opcional" />
                </InputGroup>
                <InputGroup>
                    <InputLeftAddon children='Ciudad' />
                    <Input type='text' />
                </InputGroup>
                <InputGroup>
                    <InputLeftAddon children='Codigo Postal' />
                    <Input type='text' />
                </InputGroup>
                <InputGroup>
                    <InputLeftAddon children='Provincia' />
                    <Input type='text' />
                </InputGroup>
                </VStack>
                <HStack spacing='60' pt='30px'>
                    <Button w='50%' h='50px' bg='blue.100'>Ingresar / Crear Cuenta</Button>
                    <PaymentButton />
                </HStack>
            </Flex>
        </Flex>
    )
}

export default Checkout;