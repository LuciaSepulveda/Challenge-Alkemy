import {Box} from "@chakra-ui/react"
import * as React from "react"

import Header from "../components/Header/Header"
import Home from "../pages/Home/Home"

const App: React.FC = () => {
  return (
    <Box bg="gray.300" w="100%" marginTop={0} minHeight="2xl">
      <Header />
      <Home />
    </Box>
  )
}

export default App