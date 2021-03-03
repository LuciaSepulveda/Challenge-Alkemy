import {Box} from "@chakra-ui/react"
import axios from "axios"
import * as React from "react"
import arreglo from "../../api/arreglo"
import HomeBody from "../../components/HomeBody/HomeBody"
import {register} from "../../types/register"
import {Status} from "../../types/status"
import Header from "../../components/Header/Header"

interface Props {
  registers: register[]
}

const Home: React.FC<Props> = ({registers}) => {
  const [status, setStatus] = React.useState<Status>(Status.Init)
  const [incomes, setIncomes] = React.useState<number>(0)
  const [expenses, setExpenses] = React.useState<number>(0)
  const [total, setTotal] = React.useState<number>(0)
  let counter = 0
  const lastTenRegisters = []

  React.useEffect(() => {
    if (status === "init") {
      registers.map((elem) => {
        console.log(elem.type)
        if (elem.type === "income") {
          setIncomes((incomes) => incomes + elem.amount)
          setTotal((total) => total + elem.amount)
        } else {
          setExpenses((expenses) => expenses + elem.amount)
          setTotal((total) => total - elem.amount)
        }
      })

      if (registers.length > 11) {
        counter = registers.length - 10
      }
      while (counter !== registers.length) {
        lastTenRegisters[counter] = registers[counter]
        counter = counter + 1
      }
      setStatus(Status.Ready)
    }

    return
  }, [status])

  return (
    <Box bg="gray.300" w="100%" mt={0} minHeight="2xl">
      <HomeBody expenses={expenses} income={incomes} register={registers} total={total} />
    </Box>
  )
}

export default Home
