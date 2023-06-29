import { ChakraProvider, Box, IconButton, Flex } from '@chakra-ui/react'
import BuilderContainer from './components/BoxBuilder/BuilderContainer'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import LoginContainer from './components/Login/LoginContainer'
import Home from './components/Home/Home'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import Checkout from './components/Checkout/Checkout'
import OrderStatus from './components/OrderStatus/OrderStatus'
import { useContext } from 'react'
import { CartContext } from './components/Contexts/CartContext'



function App() {

  const [currentViewIndex, setCurrentViewIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const { cart } = useContext(CartContext);

  const views = [
    <Home />,
    <BuilderContainer />,
    <Checkout />,
  ];

  const navigate = useNavigate();
  const location = useLocation();

  const handleLeftClick = () => {
    const currentPath = location.pathname;
    if (currentPath === "/builder") {
      navigate("/");
    } else if (currentPath === "/checkout") {
      if (cart.length > 0) {
        navigate("/builder");
      } else {
        console.log('El carrito está vacío');
      }
    }
  };
  
  const handleRightClick = () => {
    const currentPath = location.pathname;
    if (currentPath === "/") {
      navigate("/builder");
    } else if (currentPath === "/builder") {
      if (cart.length > 0) {
        navigate("/checkout");
      } else {
        console.log('El carrito está vacío');
      }
    }
  };

  const sliderVariants = {
    initial: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    enter: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 100, damping: 20 },
        opacity: { duration: 0.5 }
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };



  return (
      <ChakraProvider>
        <NavBar />
        <Flex justifyContent="space-between" alignItems="center" h="85vh" bg={'#EEE3CB'}>
          <IconButton
            aria-label="Left Arrow"
            icon={<ChevronLeftIcon />}
            onClick={handleLeftClick}
          />
          <AnimatePresence initial={false} custom={direction}>
            <Flex
              as={motion.div}
              key={currentViewIndex}
              variants={sliderVariants}
              initial="initial"
              animate="enter"
              exit="exit"
              custom={direction}
              transition={{ duration: 0.5 }}
              w="100%"
            >
              <Routes>
                <Route path="/" element={views[0]} />
                <Route path="/builder" element={views[1]} />
                <Route path="/checkout" element={views[2]} />
                <Route path="/status" element={<OrderStatus />} />
              </Routes>
            </Flex>
          </AnimatePresence>
          <IconButton
            aria-label="Right Arrow"
            icon={<ChevronRightIcon />}
            onClick={handleRightClick}
          />
        </Flex>
        <Footer />
      </ChakraProvider>
  )

}

export default App
