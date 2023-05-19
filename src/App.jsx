import { ChakraProvider, Box, IconButton, Flex } from '@chakra-ui/react'
import BuilderContainer from './components/BoxBuilder/BuilderContainer'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import LoginContainer from './components/Login/LoginContainer'
import Home from './components/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import Form from './components/FormView/Form'
import SuccesMessage from './components/SuccesMessage/SuccesMessage'
import Checkout from './components/Checkout/Checkout'



function App() {

  const [currentViewIndex, setCurrentViewIndex] = useState(0);
  const [direction, setDirection] = useState(1);


  const views = [
    <Home />,
    <BuilderContainer />,
    <Form/>,
    <SuccesMessage/>,
    <Checkout/>
  ];
  

  const handleLeftClick = () => {
    if (currentViewIndex > 0) {
      setDirection(-1);
      setCurrentViewIndex((prevIndex) => prevIndex - 1);
    }
  };
  
  const handleRightClick = () => {
    if (currentViewIndex < views.length - 1) {
      setDirection(1);
      setCurrentViewIndex((prevIndex) => prevIndex + 1);
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
    <BrowserRouter>
      <ChakraProvider>
        <NavBar />
        <Flex justifyContent="space-between" alignItems="center" h="92vh" bg='red.900'>
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
              {views[currentViewIndex]}
            </Flex>
          </AnimatePresence>


          <IconButton
            aria-label="Right Arrow"
            icon={<ChevronRightIcon />}
            onClick={handleRightClick}
          />
        </Flex>

        <Routes>
          <Route path="/login" element={<LoginContainer />} />
        </Routes>
        <Footer />
      </ChakraProvider>
    </BrowserRouter>
  )
}

export default App
