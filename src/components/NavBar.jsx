import { Flex, Text, Icon} from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";

const NavBar = () => {
    return (
        <Flex h='8vh' bg='red.900' color='whiteAlpha.800'>
            <Text display='flex' alignItems='center' fontSize='3xl' w='50%' pl='40px'>Chocolates</Text>
            <Flex w='50%' justify='flex-end' align='center'>
            <Flex w='50%' pr='40px' justify='flex-end' align='center'>
                <Link to='/box'>Usuario</Link>
                <Icon ml='20px' h='30px' w='30px' as={AiOutlineUser}/>
            </Flex>
            <Flex align='center'>
                <Text fontSize='2xl' mr='10px'>4</Text>
                <Icon h='30px' w='30px' mr='70px' as={AiOutlineShoppingCart}/>
            </Flex>
            </Flex>
        </Flex>
    )
}

export default NavBar