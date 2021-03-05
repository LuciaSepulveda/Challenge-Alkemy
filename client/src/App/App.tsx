import {Box} from "@chakra-ui/react"
import * as React from "react"
import axios from "axios"

import Header from "../components/Header/Header"
import Home from "../pages/Home/Home"
import Operations from "../pages/Operations/Operations"
import {register} from "../types/register"
import {Status} from "../types/status"
import Loading from "../pages/Loading/Loading"

const App: React.FC = () => {
  const [status, setStatus] = React.useState<Status>(Status.Init)
  const [update, setUpdate] = React.useState<boolean>(false)
  const [registers, setRegisters] = React.useState<register[]>([])
  const [state, setState] = React.useState<"Home" | "Operations">("Home")

  React.useEffect(() => {
    if (status === "init" || update === true) {
      axios
        .get("http://localhost:3001/api/get")
        .then((response) => {
          setRegisters(response.data)
          setStatus(Status.Ready)
        })
        .catch((error) => {
          setStatus(Status.Rejected)
        })
      if (update === true) setUpdate(false)
    }
  }, [status, update])

  const changeState = (actual: string) => {
    if (actual === "Home") {
      setState("Operations")
      setUpdate(true)
    } else {
      setState("Home")
      setUpdate(true)
    }
  }

  return (
    <Box bg="gray.300" marginTop={0} minHeight="2xl" w="100%">
      <Header change={changeState} />
      {status === "init" && state === "Home" && <Loading h={"2xl"} />}
      {status === "ready" && state === "Home" && <Home registers={registers} updateInfo={update} />}
      {status === "ready" && state === "Operations" && <Operations />}
      {status === "rejected" && <div>Error</div>}
    </Box>
  )
}

export default App
