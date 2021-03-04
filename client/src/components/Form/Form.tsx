import {
  Button,
  FormControl,
  FormLabel,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react"
import * as React from "react"
import {useForm} from "react-hook-form"
import {addRegister} from "../../api/functions"

type FormType = {
  concept: string
  amount: number
  date: Date
  type: string
}

interface Props {
  updateReg: () => void
}

const Form: React.FC<Props> = ({updateReg}) => {
  const {register, handleSubmit, reset} = useForm<FormType>()
  const [updateInfo, setUpdateInfo] = React.useState<boolean>(false)

  React.useEffect(() => {
    if (updateInfo === true) {
      updateReg()
      setUpdateInfo(false)
    }
  }, [updateInfo, updateReg])

  const defaultValues = {
    concept: "",
    amount: undefined,
    date: "",
    type: "",
  }

  const onSubmit = (data: FormType) => {
    addRegister(data.concept, data.amount, data.date.toString(), data.type)
    updateReg()
    setUpdateInfo(true)
    reset(defaultValues)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <FormLabel htmlFor="concept">Concept</FormLabel>
        <Input ref={register} required id="concept" name="concept" placeholder="Concept" />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="amount">Amount</FormLabel>
        <NumberInput required>
          <NumberInputField ref={register} id="amount" name="amount" />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="date">Date</FormLabel>
        <Input ref={register} required id="date" name="date" type="date" />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="type">Type</FormLabel>
        <RadioGroup required>
          <Stack direction="row">
            <Radio ref={register} id="type" name="type" value="income">
              Income
            </Radio>
            <Radio ref={register} id="type" name="type" value="expense">
              Expense
            </Radio>
          </Stack>
        </RadioGroup>
      </FormControl>
      {updateInfo && (
        <Button isLoading colorScheme="primary" m="auto" p="2" type="submit">
          Adding
        </Button>
      )}
      {!updateInfo && (
        <Button colorScheme="primary" m="auto" p="2" type="submit">
          Add
        </Button>
      )}
    </form>
  )
}

export default Form
