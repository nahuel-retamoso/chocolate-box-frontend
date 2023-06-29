import { Flex, Text } from "@chakra-ui/react"
import { useState } from "react";
import Success from "./Success";
import Error from "./Error";

const OrderStatus = () => {

    const [ email, setEmail ] = useState('');
    const [ status, setStatus ] = useState(false);

    fetch('http://localhost:3000/status')
        .then(response => response.json())
        .then(data => {
            setEmail(data.email);
            setStatus(data.payment);
            console.log(email + status);  // Aquí puedes hacer lo que necesites con el email
        })
        .catch(error => {
            console.error('Error:', error);
        });


    return (
        <Flex w='100%' h='84vh'>
            {status === true ? <Success email={email}/> : <Error/>}
        </Flex>
    )
}

export default OrderStatus;