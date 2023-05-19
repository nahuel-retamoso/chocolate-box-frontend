import { useContext } from "react";
import AuthContext from "../Contexts/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Input, Text } from "@chakra-ui/react";

const Login = () => {
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const handleLogin = async () => {
    try {
      await login(email, password);
      navigate("/");
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        setError("Contraseña incorrecta");
      } else {
        alert("Error al iniciar sesión: ", error.message);
      }
    }
  };

  return (
    <Box display="flex" flexDirection="column">
      <Text mb="4">* Email</Text>
      <Input
        h="10"
        borderRadius="md"
        borderWidth="1px"
        borderColor="black"
        mb="4"
        pl="3"
        type="text"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Text mb="4">* Contraseña</Text>
      <Input
        h="10"
        borderRadius="md"
        borderWidth="1px"
        borderColor="black"
        mb="10"
        pl="3"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
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
        onClick={() => {
          handleLogin();
        }}
      >
        Ingresar
      </Button>
      {error && (
        <Text color="red.600" mt="5" ml="1">
          {error}
        </Text>
      )}
    </Box>
  );
};

export default Login;
