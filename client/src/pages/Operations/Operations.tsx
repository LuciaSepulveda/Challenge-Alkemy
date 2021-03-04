import {Box} from "@chakra-ui/react"
import * as React from "react"
import Form from "../../components/Form/Form"
import ListOfRegisters from "../../components/ListOfRegisters/ListOfRegisters"
import {register} from "../../types/register"
import axios from "axios"
import {Status} from "../../types/status"
import Loading from "../Loading/Loading"

const Operations: React.FC = () => {
  const [status, setStatus] = React.useState<Status>(Status.Init)
  const [registers, setRegisters] = React.useState<register[]>([])
  const [update, setUpdate] = React.useState<boolean>(false)

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
          console.log(error)
        })
    }
    if (update === true) setUpdate(false)
  })

  const changeUpdate = () => {
    setUpdate(!update)
  }

  return (
    <Box w="60%" m="auto" mt={4} bg="gray.400" p={2}>
      {status === "init" && <Loading h="l" />}
      <Form updateReg={changeUpdate} />
      <ListOfRegisters registers={registers} updateReg={changeUpdate} />
    </Box>
  )
}

export default Operations
