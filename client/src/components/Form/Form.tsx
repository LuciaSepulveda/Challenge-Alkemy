import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
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

const Form: React.FC = () => {
  const {register, handleSubmit} = useForm<FormType>()

  const onSubmit = (data: FormType) => {
    addRegister(data.concept, data.amount, data.date.toString(), data.type)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <FormLabel htmlFor="concept">Concept</FormLabel>
        <Input required id="concept" name="concept" placeholder="Concept" ref={register} />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="amount">Amount</FormLabel>
        <NumberInput required>
          <NumberInputField ref={register} name="amount" id="amount" placeholder="" />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="date">Date</FormLabel>
        <Input required ref={register} name="date" id="date" type="date"></Input>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="type">Type</FormLabel>
        <RadioGroup required>
          <Stack direction="row">
            <Radio value="income" ref={register} name="type" id="type">
              Income
            </Radio>
            <Radio value="expense" ref={register} name="type" id="type">
              Expense
            </Radio>
          </Stack>
        </RadioGroup>
      </FormControl>
      <Button type="submit" colorScheme="primary" m="auto" p="2">
        Add
      </Button>
    </form>
  )
}

export default Form
