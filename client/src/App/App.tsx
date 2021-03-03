import {Box, Spinner} from "@chakra-ui/react"
import * as React from "react"
import Header from "../components/Header/Header"
import Home from "../pages/Home/Home"
import Operations from "../pages/Operations/Operations"
import {register} from "../types/register"
import {Status} from "../types/status"
import Loading from "../pages/Loading/Loading"
import axios from "axios"

const App: React.FC = () => {
  const [status, setStatus] = React.useState<Status>(Status.Init)
  const [registers, setRegisters] = React.useState<register[]>([])
  const [state, setState] = React.useState<"Home" | "Operations">("Home")

  React.useEffect(() => {
    if (status === "init") {
      axios
        .get("http://localhost:3001/api/get")
        .then((response) => {
          setRegisters(response.data)
          setStatus(Status.Ready)
        })
        .catch((error) => {
          setStatus(Status.Rejected)
          console.log(error)
        })
    }
  })

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
      {status === "init" && state === "Home" && <Loading h={"2xl"} />}
      {status === "ready" && state === "Home" && <Home registers={registers} />}
      {status === "ready" && state === "Operations" && <Operations registers={registers} />}
    </Box>
  )
}

export default App
