import { Button, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";
import { createOrder } from "../../../firebase/firestoreFunctions";

const PaymentButton = ({ isValid, generateOrder, orderId }) => {

    const { cart } = useContext(CartContext);

    const [confirm, setConfirm] = useState(false);

    useEffect(() => {
        setConfirm(false);
    }, [orderId])


    const [mp, setMp] = useState(null);

    useEffect(() => {
        const script = document.createElement('script');

        script.src = "https://sdk.mercadopago.com/js/v2";
        script.async = true;

        script.onload = () => {
            setMp(new window.MercadoPago(import.meta.env.VITE_MP_PUBLIC_KEY));
        };

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);

    const setPreferencesButton = () => {

        const transformItems = (item, id) => {
            return {
                id: id,
                title: item.name,
                description: item.boxSize,
                quantity: 1, // Asegúrate de que este valor sea correcto para tu caso.
                unit_price: item.price
            };
        }
        
        // Usando la función en tus items
        // const originalItems = {id1: obj1, id2: obj2, id3: obj3}; // tus objetos originales aquí
        const formattedItems = cart.map(item => {
            const key = Object.keys(item)[0];  // Obtenemos la única clave del objeto
            const boxData = item[key];  // Accedemos al objeto dentro del objeto
            return transformItems(boxData, key);
          });
          

        const dataToSend = {
            items: formattedItems,
            shippingCost: 100,
            orderId: orderId,
        }
        
        console.log(dataToSend);
        // console.log(cart)

        setConfirm(true)
        fetch("http://localhost:3000/create_preference", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataToSend),
        })
            .then((response) => {
                return response.json();
            })
            .then((preference) => {
                console.log(preference);
                if (mp) {
                    mp.bricks().create("wallet", "wallet_container", {
                        initialization: {
                            preferenceId: preference.id,
                            redirectMode: "self"
                        },
                    });
                } else {
                    console.error('MercadoPago no está definido');
                }
            })
        
        createOrder(generateOrder());
    }

    return (
        <Box>
            {confirm == true ? null : <Button isDisabled={!isValid} onClick={setPreferencesButton} bg='green.200' h='50px'>Confirmar</Button>}
            <div id="wallet_container"></div>
        </Box>
    )
}

export default PaymentButton
