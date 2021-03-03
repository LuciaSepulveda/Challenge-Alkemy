import {CheckIcon, DeleteIcon, EditIcon} from "@chakra-ui/icons"
import {
  Box,
  Button,
  Grid,
  HStack,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react"
import * as React from "react"
import {register} from "../../types/register"

interface Props {
  elem: register
}

const GridRegister: React.FC<Props> = ({elem}) => {
  const [update, setUpdate] = React.useState<boolean>(false)

  return (
    <Box>
      {update && (
        <Grid boxShadow="md" p={2} templateColumns={{sm: "repeat(1,1fr)", md: "repeat(4,1fr)"}}>
          <Box m="auto">{elem.concept}</Box>
          <Box m="auto">{elem.amount}</Box>
          <Box m="auto">{elem.date}</Box>
          <HStack>
            <Button leftIcon={<EditIcon />}>Edit</Button>
            <Button leftIcon={<DeleteIcon />}>Delete</Button>
          </HStack>
        </Grid>
      )}
      {!update && (
        <Grid boxShadow="md" p={2} templateColumns={{sm: "repeat(1,1fr)", md: "repeat(4,1fr)"}}>
          <Input m="auto" placeholder="concept" />
          <NumberInput m="auto">
            <NumberInputField name="amount" id="amount" placeholder="" />
          </NumberInput>
          <Input m="auto" type="date" />
          <HStack>
            <Button leftIcon={<CheckIcon />}>Edit</Button>
            <Button disabled leftIcon={<DeleteIcon />}>
              Delete
            </Button>
          </HStack>
        </Grid>
      )}
    </Box>
  )
}

export default GridRegister
