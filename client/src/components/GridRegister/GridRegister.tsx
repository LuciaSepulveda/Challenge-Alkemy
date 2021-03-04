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
import {deleteRegister} from "../../api/functions"

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
  const [updateInfo, setUpdateInfo] = React.useState<boolean>(false)
  const [deleteInfo, setDeleteInfo] = React.useState<boolean>(false)
  const {register, handleSubmit} = useForm<FormType>()

  React.useEffect(() => {
    if (updateInfo === true && deleteInfo === false) {
      updateReg()
      setUpdateInfo(false)
      setUpdate(false)

      return
    }
  }, [updateInfo, updateReg])

  React.useEffect(() => {
    if (deleteInfo === true && updateInfo === false) {
      updateReg()
      setDeleteInfo(false)
      setUpdate(false)

      return
    }
  }, [deleteInfo, updateReg])

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
    updateReg()
    setUpdateInfo(true)
  }

  const deleteReg = (id: number) => {
    deleteRegister(id)
    updateReg()
    setDeleteInfo(true)
  }

  return (
    <Box>
      {!update && (
        <Grid boxShadow="md" p={2} templateColumns={{sm: "repeat(1,1fr)", md: "repeat(4,1fr)"}}>
          <Box m="auto">{elem.concept}</Box>
          <Box m="auto">{elem.amount}</Box>
          <Box m="auto">{elem.date}</Box>
          <HStack>
            <Button leftIcon={<EditIcon />} onClick={() => setUpdate(true)}>
              Edit
            </Button>
            <Button leftIcon={<DeleteIcon />} onClick={() => deleteReg(elem.id)}>
              Delete
            </Button>
          </HStack>
        </Grid>
      )}
      {update && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid boxShadow="md" p={2} templateColumns={{sm: "repeat(1,1fr)", md: "repeat(4,1fr)"}}>
            <Input ref={register} defaultValue={elem.concept} m="auto" name="concept" />
            <NumberInput defaultValue={elem.amount} m="auto">
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
            <Input ref={register} defaultValue={elem.date} m="auto" name="date" type="date" />
            <HStack>
              {updateInfo && (
                <Button isLoading leftIcon={<EditIcon />}>
                  Editanding
                </Button>
              )}
              {!updateInfo && (
                <Button leftIcon={<EditIcon />} type="submit">
                  Edit
                </Button>
              )}
              <Button leftIcon={<CloseIcon />} m="auto" onClick={() => setUpdate(false)}>
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
