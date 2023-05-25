import { Flex } from "@chakra-ui/react";
import Form from "./Form/Form";
import PurchaseSummary from "./PurchaseSummary/PurchaseSummary";

const Checkout = () => {

    return (
        <Flex justify='center' w='full' h='85vh'>
            <PurchaseSummary/>
            <Form />
        </Flex>
    )
}

export default Checkout;