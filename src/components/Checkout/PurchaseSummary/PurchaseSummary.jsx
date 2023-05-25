import { Flex, Text, VStack } from "@chakra-ui/react";
import CartItem from "./CartItem";
import { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";

const PurchaseSummary = () => {

    const { cart, removeById } = useContext(CartContext);

    const calculateTotal = () => {
        let total = 0;
        cart.forEach(item => {
            const boxId = Object.keys(item)[0];
            const box = item[boxId];
            total += box.price;
        });
        return total;
    }

    
    return (
        <Flex w='40%' direction="column" align='center' pt='20px' overflow='hidden'>
            <Flex direction='column' h='80%' w='100%' align='center'>
                <Text fontSize='2xl' color='blackAlpha.800'>Resumen de la compra</Text>
                <VStack spacing='20px' align='flex-start' w='full' h='full' px='80px' pt='30px'>
                    {cart.map((item) => {
                        const boxId = Object.keys(item)[0];
                        const box = item[boxId];
                        return (
                           <CartItem box={box} boxId={boxId} remove={removeById}/>
                        )
                    })}
                </VStack>
            </Flex>
            <Flex h='20%' w='100%' pt='20px' justify='center'>
                <Text fontSize='2xl' color='blackAlpha.800'>Total: ${calculateTotal()}</Text>
            </Flex>
            </Flex>
    )
}

export default PurchaseSummary