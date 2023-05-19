import { useState } from "react";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import Signup from "./Signup";
import Login from "./Login";

const LoginContainer = () => {
  const [activeSection, setActiveSection] = useState("login");

  return (
    <Flex align="center" justify="center" w="full" zIndex="40" pt="10" pb="20">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        w="3/4"
        borderWidth="1px"
        bg="whiteAlpha.800"
        borderRadius="md"
        pb="10"
        pt="10"
      >
        <Heading as="h1" size="2xl" fontWeight="bold" mb="10">
          {activeSection === "login" ? "Iniciar Sesión" : "Registrarme"}
        </Heading>
        <Box display="flex" flexDirection="column" w="1/3">
          <Flex w="full" h="14" mb="10">
            <Button
              w="1/2"
              borderBottomWidth={activeSection === "login" ? "2px" : "0"}
              borderBottomColor={
                activeSection === "login" ? "yellow.600" : "transparent"
              }
              onClick={() => setActiveSection("login")}
            >
              Ingresar
            </Button>
            <Button
              w="1/2"
              borderBottomWidth={activeSection === "register" ? "2px" : "0"}
              borderBottomColor={
                activeSection === "register" ? "yellow.600" : "transparent"
              }
              onClick={() => setActiveSection("register")}
            >
              Registrarse
            </Button>
          </Flex>
          {activeSection === "login" ? <Login /> : <Signup />}
        </Box>
      </Box>
    </Flex>
  );
};

export default LoginContainer;
