import {CheckIcon, DeleteIcon, EditIcon, CloseIcon} from "@chakra-ui/icons"
import {
  Box,
  Button,
  Grid,
  HStack,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react"
import * as React from "react"
import {useForm} from "react-hook-form"
import {register} from "../../types/register"
import {updateRegister} from "../../api/functions"

interface Props {
  elem: register
  updateReg: () => void
}

type FormType = {
  concept: string
  amount: number
  date: Date
}

const GridRegister: React.FC<Props> = ({elem, updateReg}) => {
  const [update, setUpdate] = React.useState<boolean>(false)
  const [changeUpdate, setChangeUpdate] = React.useState<boolean>(false)
  const {register, handleSubmit} = useForm<FormType>()

  React.useEffect(() => {
    if (changeUpdate === true) {
      return
    }
  }, [changeUpdate])

  const onSubmit = (data: FormType) => {
    let newConcept = ""
    let newAmount = 0
    let newDate = ""

    if (data.concept === "") {
      newConcept = elem.concept
    } else newConcept = data.concept
    if (isNaN(data.amount)) {
      newAmount = elem.amount
    } else newAmount = data.amount
    if (data.date === undefined || data.date === null) newDate = elem.date
    else newDate = data.date.toString()
    updateRegister(elem.id, newConcept, newAmount, newDate, elem.type)
    editUpdate()
    updateReg()
  }

  const editUpdate = () => {
    setUpdate(!update)
    setChangeUpdate(true)
  }

  return (
    <Box>
      {!update && (
        <Grid boxShadow="md" p={2} templateColumns={{sm: "repeat(1,1fr)", md: "repeat(4,1fr)"}}>
          <Box m="auto">{elem.concept}</Box>
          <Box m="auto">{elem.amount}</Box>
          <Box m="auto">{elem.date}</Box>
          <HStack>
            <Button onClick={editUpdate} leftIcon={<EditIcon />}>
              Edit
            </Button>
            <Button leftIcon={<DeleteIcon />}>Delete</Button>
          </HStack>
        </Grid>
      )}
      {update && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid boxShadow="md" p={2} templateColumns={{sm: "repeat(1,1fr)", md: "repeat(4,1fr)"}}>
            <Input m="auto" defaultValue={elem.concept} name="concept" ref={register} />
            <NumberInput m="auto" defaultValue={elem.amount}>
              <NumberInputField
                ref={register}
                defaultValue={elem.amount}
                id="amount"
                name="amount"
              />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <Input m="auto" type="date" ref={register} name="date" defaultValue={elem.date} />
            <HStack>
              <Button m="auto" type="submit" leftIcon={<CheckIcon />}>
                Edit
              </Button>
              <Button m="auto" onClick={editUpdate} leftIcon={<CloseIcon />}>
                Cancel
              </Button>
            </HStack>
          </Grid>
        </form>
      )}
    </Box>
  )
}

export default GridRegister
