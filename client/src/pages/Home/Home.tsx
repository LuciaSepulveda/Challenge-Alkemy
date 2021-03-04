import {Box} from "@chakra-ui/react"
import * as React from "react"
import {useState} from "react"
import HomeBody from "../../components/HomeBody/HomeBody"
import {register} from "../../types/register"
import {Status} from "../../types/status"

interface Props {
  registers: register[]
  //updateInfo: boolean
}

const Home: React.FC<Props> = ({registers}) => {
  const [status, setStatus] = React.useState<Status>(Status.Init)
  const [incomes, setIncomes] = React.useState<number>(0)
  const [expenses, setExpenses] = React.useState<number>(0)
  const [total, setTotal] = React.useState<number>(0)
  const [lastTenRegisters, setLastTenRegisters] = React.useState<register[]>([])
  let counter = 0
  const array: register[] = []
  // eslint-disable-next-line prefer-const
  //let lastTenRegisters: register[] = []

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
      }) /*
      if (registers.length > 11) {
        counter = registers.length - 10
      }
      while (counter !== registers.length) {
        lastTenRegisters[counter] = registers[counter]
        counter = counter + 1
      }*/
      setStatus(Status.Pending)
    }

    return
  }, [status])

  if (status === "pending") {
    if (registers.length >= 11) {
      counter = registers.length - 10
      console.log(counter)
    }
    let i = 0

    while (counter !== registers.length) {
      array[i] = registers[counter]
      counter = counter + 1
      i = i + 1
    }
    setLastTenRegisters(array)
    setStatus(Status.Ready)
  }

  return (
    <Box bg="gray.300" minHeight="2xl" mt={0} w="100%">
      {status === "ready" && (
        <HomeBody expenses={expenses} income={incomes} register={lastTenRegisters} total={total} />
      )}
    </Box>
  )
}

export default Home
