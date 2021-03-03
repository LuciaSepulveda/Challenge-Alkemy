import {Box, Button, Stack, Text} from "@chakra-ui/react"
import axios from "axios"
import * as React from "react"
import {register} from "../../types/register"
import {Status} from "../../types/status"
import TableRegisters from "../TableRegisters/TableRegisters"

interface Props {
  registers: register[]
}

const ListOfRegisters: React.FC<Props> = ({registers}) => {
  const [status, setStatus] = React.useState<Status>(Status.Init)
  const [type, setType] = React.useState<"income" | "expense" | "">("")

  const selectType = (t: "income" | "expense") => {
    setType(t)
  }

  return (
    <Box>
      <Stack direction="row" spacing={6}>
        <Text>Select type of registers</Text>
        <Button onClick={() => selectType("income")}>Income</Button>
        <Button onClick={() => selectType("expense")}>Expense</Button>
      </Stack>
      {type === "" && <Box> Please select the type of registers to view</Box>}
      {type === "income" && <TableRegisters registers={registers} type="income" />}
      {type === "expense" && <Box>{"EXPENSE"}</Box>}
    </Box>
  )
}

export default ListOfRegisters
