import { Button, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const PaymentButton = () => {

    const [confirm, setConfirm] = useState(false);

    const orderData = {
        quantity: 1,
        description: "Point Mini a maquininha que dá o dinheiro de suas vendas na hora",
        price: 199.9
    }

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
        setConfirm(true)
        fetch("http://localhost:3000/create_preference", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(orderData),
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
                            redirectMode: "modal"
                        },
                    });
                } else {
                    console.error('MercadoPago no está definido');
                }
            })
    }

    return (
        <Box>
            {confirm == true ? null : <Button onClick={setPreferencesButton} bg='green.200' h='50px'>Confirmar</Button>}
            <div id="wallet_container"></div>
        </Box>
    )
}

export default PaymentButton
