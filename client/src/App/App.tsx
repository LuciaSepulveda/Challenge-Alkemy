import {Box} from "@chakra-ui/react"
import * as React from "react"
import Header from "../components/Header/Header"
import Home from "../pages/Home/Home"
import Operations from "../pages/Operations/Operations"

const App: React.FC = () => {
  const [state, setState] = React.useState<"Home" | "Operations">("Home")

  const changeState = (actual: string) => {
    if (actual === "Home") {
      setState("Operations")
    } else {
      setState("Home")
    }
  }

  return (
    <Box bg="gray.300" marginTop={0} minHeight="2xl" w="100%">
      <Header change={changeState} />
      {state === "Home" && <Home />}
      {state === "Operations" && <Operations />}
    </Box>
  )
}

export default App
