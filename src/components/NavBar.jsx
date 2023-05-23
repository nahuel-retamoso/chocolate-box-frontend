import { Flex, Text, Icon} from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "./Contexts/CartContext";

const NavBar = () => {

    const { cart } = useContext(CartContext);

    const [itemCount, setItemCount] = useState(0);

    useEffect(() => {
        let count = cart.length
        setItemCount(count)
    }, [cart]);

    return (
        <Flex h='12vh' align='center' bg={'#EEE3CB'} justify='center'>
        <Flex h='9vh' w='80%' bg={'whiteAlpha.700'} color='whiteAlpha.800' borderRadius='2xl' color='blackAlpha.800'>
            <Text display='flex' alignItems='center' fontSize='3xl' w='50%' pl='40px'>Chocolates</Text>
            <Flex w='50%' justify='flex-end' align='center'>
            <Flex w='50%' pr='40px' justify='flex-end' align='center'>
                <Link to='/box'>Usuario</Link>
                <Icon ml='20px' h='30px' w='30px' as={AiOutlineUser}/>
            </Flex>
            <Flex align='center'>
                <Text fontSize='2xl' mr='10px'>{itemCount}</Text>
                <Icon h='30px' w='30px' mr='70px' as={AiOutlineShoppingCart}/>
            </Flex>
            </Flex>
        </Flex>
        </Flex>
    )
}

export default NavBar