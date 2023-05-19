import { useContext, useState } from "react";
import AuthContext from "../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Box, Button, Input, Text } from "@chakra-ui/react";

const Signup = () => {
  const navigate = useNavigate();

  const { signup } = useContext(AuthContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== passwordConfirmation) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    try {
      const { user } = await signup(email, password, firstName, lastName);
      console.log("Usuario registrado: ", user);
      navigate(-1);
    } catch (error) {
      console.error("Error al registrar el usuario: ", error.message);
      setError(error.message);
    }
  };

  return (
    <Box display="flex" flexDirection="column">
      <Text mb="4">* Nombre</Text>
      <Input
        p="3"
        h="10"
        borderRadius="md"
        borderWidth="1px"
        borderColor="black"
        mb="4"
        type="text"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <Text mb="4">* Apellido</Text>
      <Input
        p="3"
        h="10"
        borderRadius="md"
        borderWidth="1px"
        borderColor="black"
        mb="4"
        type="text"
        onChange={(e) => setLastName(e.target.value)}
      />
      <Text mb="4">* Email</Text>
      <Input
        p="3"
        h="10"
        borderRadius="md"
        borderWidth="1px"
        borderColor="black"
        mb="4"
        type="text"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Text mb="4">* Contraseña</Text>
      <Input
        p="3"
        h="10"
        borderRadius="md"
        borderWidth="1px"
        borderColor="black"
        mb="4"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Text mb="4">* Repetir Contraseña</Text>
      <Input
        p="3"
        h="10"
        borderRadius="md"
        borderWidth="1px"
        borderColor="black"
        mb="10"
        type="password"
        onChange={(e) => setPasswordConfirmation(e.target.value)}
      />
      <Button
        bg="yellow.600"
        borderRadius="md"
        w="full"
        h="10"
        justifyContent="center"
        alignItems="center"
        display="flex"
        fontWeight="bold"
        color="whiteAlpha.900"
        onClick={handleSignUp}
      >
        Registrarme
      </Button>
      {error && (
        <Text color="red.600" mt="5" ml="1">
          {error}
        </Text>
      )}
    </Box>
  );
};

export default Signup;
