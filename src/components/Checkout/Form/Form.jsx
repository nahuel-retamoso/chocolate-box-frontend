import React, { useEffect, useState } from 'react';
import { Button, Flex, HStack, Input, InputGroup, InputLeftAddon, InputRightElement, Select, Text, VStack, Icon, InputLeftElement } from "@chakra-ui/react";
import PaymentButton from "./PaymentButton";
import { EmailIcon, PhoneIcon, WarningIcon } from '@chakra-ui/icons';
import citiesData from './cities.json';
import { CartContext } from '../../Contexts/CartContext';
import { useContext } from 'react';

const Form = () => {

    const { cart } = useContext(CartContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [department, setDepartment] = useState('');
    const [province, setProvince] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPhoneValid, setIsPhoneValid] = useState(true);
    const [isNumberValid, setIsNumberValid] = useState(true);
    const [isPostalCodeValid, setIsPostalCodeValid] = useState(true);
    const [id, setId] = useState('')

    const citiesCABA = citiesData.citiesCABA;
    const citiesPBA = citiesData.citiesPBA;

    const handleProvinceChange = (e) => {
        setProvince(e.target.value);
        setCity(''); // Reseteamos la ciudad cada vez que cambia la provincia
    };

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const validatePhoneNumber = (phoneNumber) => {
        const re = /^[0-9\b]+$/;
        return re.test(phoneNumber) && phoneNumber.length === 10; // Suponiendo que el número de teléfono debe tener 10 dígitos.
    };

    const validateNumber = (number) => {
        const re = /^[0-9\b]+$/;
        return re.test(number);
    };

    const validatePostalCode = (postalCode) => {
        const re = /^[0-9\b]+$/;
        return re.test(postalCode);
    };

    const isFormValid = () => {
        return (
            name !== '' &&
            email !== '' &&
            phoneNumber !== '' &&
            street !== '' &&
            number !== '' &&
            province !== '' &&
            city !== '' &&
            postalCode !== '' &&
            isEmailValid &&
            isPhoneValid &&
            isNumberValid &&
            isPostalCodeValid
        );
    }

    useEffect(() => {
        const id = email + '_' + Date.now().toString() + '_' + Math.floor(Math.random() * 1000000).toString();
        setId(id);
    },[cart, name, email, phoneNumber, street, number, department, province, city, postalCode, neighborhood])

    const generateOrder = () => {

        const datosEnvio = {
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            street: street,
            number: number,
            department: department,
            province: province,
            city: city,
            postalCode: postalCode,
            neighborhood: neighborhood,
        }

        const order = {
            orderId: id,
            items: cart,
            datosEnvio: datosEnvio,
            date: new Date(),
            isPaid: false,
            status: 'preparacion',
        }
        return order;
    }

    return (
        <Flex w='40%' h='100%' direction="column" px='60px' pt='30px'>
            <VStack spacing='5'>
                <Text fontSize='2xl' color='blackAlpha.800'>Datos del destinatario</Text>
                <InputGroup>
                    <Input variant='filled' type='text' placeholder='* Nombre' value={name} onChange={(e) => setName(e.target.value)} />
                </InputGroup>
                <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                        <EmailIcon color='blackAlpha.800' />
                    </InputLeftElement>
                    <Input
                        variant='filled'
                        type='text'
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setIsEmailValid(validateEmail(e.target.value));
                        }}
                        isInvalid={email.length > 0 && !isEmailValid}
                    />
                    {!isEmailValid && <InputRightElement children={<WarningIcon color="red.500" />} />}
                </InputGroup>
                <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                        <PhoneIcon color='blackAlpha.800' />
                    </InputLeftElement>
                    <Input
                        variant='filled'
                        type='text'
                        value={phoneNumber}
                        onChange={(e) => {
                            setPhoneNumber(e.target.value);
                            setIsPhoneValid(validatePhoneNumber(e.target.value));
                        }}
                        isInvalid={phoneNumber.length > 0 && !isPhoneValid}
                    />
                    {!isPhoneValid && <InputRightElement children={<WarningIcon color="red.500" />} />}
                </InputGroup>


            </VStack>
            <VStack spacing='5' mt='20px'>
                <Text fontSize='2xl' color='blackAlpha.800'>Domicilio del destinatario</Text>
                <HStack w='100%'>

                    <Input variant='filled' w='50%' placeholder='* Calle' type='text' value={street} onChange={(e) => setStreet(e.target.value)} />


                    <InputGroup w='25%'>
                        <Input
                            variant='filled'
                            placeholder='* Numero'
                            type='text'
                            value={number}
                            onChange={(e) => {
                                setNumber(e.target.value);
                                setIsNumberValid(validateNumber(e.target.value));
                            }}
                            isInvalid={number.length > 0 && !isNumberValid}
                            sx={{ appearance: 'textfield' }}
                        />
                        {number.length > 0 && !isNumberValid && <InputRightElement children={<WarningIcon color="red.500" />} />}
                    </InputGroup>


                    <Input variant='filled' w='25%' placeholder='Departamento' type='text' value={department} onChange={(e) => setDepartment(e.target.value)} />

                </HStack>
                <HStack w='100%'>
                    <Select variant='filled' w='50%' placeholder='Provincia' value={province} onChange={handleProvinceChange}>
                        <option value='CABA'>Ciudad Autonoma de Buenos Aires</option>
                        <option value='PBA'>Provincia de Buenos Aires</option>
                    </Select>
                    <Select variant='filled' w='50%' placeholder='Ciudad' value={city} onChange={(e) => setCity(e.target.value)}>
                        {province === 'CABA' && citiesCABA.map((city) => (
                            <option key={city} value={city}>{city}</option>
                        ))}
                        {province === 'PBA' && citiesPBA.map((city) => (
                            <option key={city} value={city}>{city}</option>
                        ))}
                    </Select>
                </HStack>
                <HStack w='100%'>
                    <InputGroup w='35%'>
                        <Input
                            variant='filled'
                            placeholder='* Codigo Postal'
                            type='text'
                            value={postalCode}
                            onChange={(e) => {
                                setPostalCode(e.target.value);
                                setIsPostalCodeValid(validatePostalCode(e.target.value));
                            }}
                            isInvalid={postalCode.length > 0 && !isPostalCodeValid}
                            sx={{ appearance: 'textfield' }}
                        />
                        {postalCode.length > 0 && !isPostalCodeValid && <InputRightElement children={<WarningIcon color="red.500" />} />}

                    </InputGroup>
                    <Input variant='filled' w='65%' type='text' placeholder="Barrio" value={neighborhood} onChange={(e) => setNeighborhood(e.target.value)} />
                </HStack>
            </VStack>
            <HStack pt='60px'>
                <Button w='50%' h='50px' bg='blackAlpha.200'>Ingresar / Crear Cuenta</Button>
                <PaymentButton isValid={isFormValid()} generateOrder={generateOrder} orderId={id} userEmail={email}/>
            </HStack>
        </Flex>
    )
}

export default Form;

