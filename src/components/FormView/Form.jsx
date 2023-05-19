import { Button, Flex, HStack, Input, InputGroup, InputLeftAddon, Text, VStack } from "@chakra-ui/react";

const Form = () => {
    return (
        <Flex align='center' justify='center' w='full' h='full'>
            <HStack spacing='20'>
                <VStack>
                    <Button>Ingresar / Crear Cuenta</Button>
                    <Text fontSize='2xl' color='whiteAlpha.800'>Datos del destinatario</Text>
                    <InputGroup>
                        <InputLeftAddon children='Nombre'/>
                        <Input type='text'/>
                    </InputGroup>
                    <InputGroup>
                        <InputLeftAddon children='Email'/>
                        <Input type='text'/>
                    </InputGroup>
                    <InputGroup>
                        <InputLeftAddon children='Numero de Telefono'/>
                        <Input type='text'/>
                    </InputGroup>
                </VStack>
                <VStack>
                <Text fontSize='2xl' color='whiteAlpha.800'>Domicilio del destinatario</Text>
                <InputGroup>
                    <InputLeftAddon children='Calle'/>
                    <Input type='text'/>
                </InputGroup>
                <InputGroup>
                    <InputLeftAddon children='Numero'/>
                    <Input type='text'/>
                </InputGroup>
                <InputGroup>
                    <InputLeftAddon children='Departamento'/>
                    <Input type='text' placeholder="Opcional"/>
                </InputGroup>
                <InputGroup>
                    <InputLeftAddon children='Barrio'/>
                    <Input type='text' placeholder="Opcional"/>
                </InputGroup>
                <InputGroup>
                    <InputLeftAddon children='Ciudad'/>
                    <Input type='text'/>
                </InputGroup>
                <InputGroup>
                    <InputLeftAddon children='Codigo Postal'/>
                    <Input type='text'/>
                </InputGroup>
                <InputGroup>
                    <InputLeftAddon children='Provincia'/>
                    <Input type='text'/>
                </InputGroup>
                </VStack>
            </HStack>
        </Flex>
    )
}

export default Form;