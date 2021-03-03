import {Box} from "@chakra-ui/react"
import * as React from "react"
import Form from "../../components/Form/Form"
import ListOfRegisters from "../../components/ListOfRegisters/ListOfRegisters"
import {register} from "../../types/register"

interface Props {
  registers: register[]
}

const Operations: React.FC<Props> = ({registers}) => {
  return (
    <Box w="60%" m="auto" mt={4} bg="gray.400" p={2}>
      <Form />
      <ListOfRegisters registers={registers} />
    </Box>
  )
}

export default Operations
