import {Box, Button, Stack, Text} from "@chakra-ui/react"
import * as React from "react"

import {register} from "../../types/register"
import TableRegisters from "../TableRegisters/TableRegisters"

interface Props {
  registers: register[]
  updateReg: () => void
}

const ListOfRegisters: React.FC<Props> = ({registers, updateReg}) => {
  const [type, setType] = React.useState<"income" | "expense" | "">("")

  const selectType = (t: "income" | "expense" | "") => {
    setType(t)
  }

  return (
    <Box>
      <Stack direction="row" spacing={6}>
        <Text>Select type of registers</Text>
        <Button onClick={() => selectType("")}>Hide</Button>
        <Button onClick={() => selectType("income")}>Income</Button>
        <Button onClick={() => selectType("expense")}>Expense</Button>
      </Stack>
      {type === "" && <Box> Please select the type of registers to view</Box>}
      {type === "income" && (
        <TableRegisters registers={registers} type="income" update={updateReg} />
      )}
      {type === "expense" && (
        <TableRegisters registers={registers} type="expense" update={updateReg} />
      )}
      <Button onClick={() => updateReg}>Refresh</Button>
    </Box>
  )
}

export default ListOfRegisters
