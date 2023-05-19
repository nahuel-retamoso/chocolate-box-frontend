import { Box, Flex, Spacer, Text, VStack, HStack, Link } from "@chakra-ui/react";

const Footer = () => {
    return (
        <Flex
            as="footer"
            h="200px"
            bg="blackAlpha.900"
            alignItems="center"
            justifyContent="center"
        >
            <VStack spacing={4}>
                <Box>
                    <Text fontSize="2xl" fontWeight="bold" color="white">
                        Logo
                    </Text>
                </Box>
                <HStack spacing={6}>
                    <Link href="#" color="white">
                        Acerca de
                    </Link>
                    <Link href="#" color="white">
                        Productos
                    </Link>
                    <Link href="#" color="white">
                        Contacto
                    </Link>
                </HStack>
                <Text fontSize="sm" color="whiteAlpha.700">
                    &copy; {new Date().getFullYear()} Todos los derechos reservados.
                </Text>
            </VStack>
        </Flex>
    )
}

export default Footer