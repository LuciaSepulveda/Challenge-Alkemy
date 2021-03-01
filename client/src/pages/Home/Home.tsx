import axios from "axios"
import * as React from "react"
import arreglo from "../../api/arreglo"
import HomeBody from "../../components/HomeBody/HomeBody"
import {register} from "../../types/register"

const Home: React.FC = () => {
  const [registers, setRegisters] = React.useState<register[]>([])
  const [status, setStatus] = React.useState<"init" | "pending" | "resolved" | "rejected">("init")
  const [incomes, setIncomes] = React.useState<number>(0)
  const [expenses, setExpenses] = React.useState<number>(0)
  const [total, setTotal] = React.useState<number>(0)
  let counter = 0
  const lastTenRegisters = []

  React.useEffect(() => {
    if (status === "init") {
      axios
        .get("http://localhost:3001/api/get")
        .then((response) => {
          setRegisters(response.data)
          setStatus("pending")
        })
        .catch((error) => {
          setStatus("rejected")
          console.log(error)
        })
    }

    return
  }, [status])

  React.useEffect(() => {
    if (status === "pending") {
      registers.map((elem) => {
        console.log(elem.type)
        if (elem.type === "ingreso") {
          setIncomes((incomes) => incomes + elem.amount)
          setTotal((total) => total + elem.amount)
        } else {
          setExpenses((expenses) => expenses + elem.amount)
          setTotal((total) => total - elem.amount)
        }
      })

      if (registers.length > 11) {
        counter = arreglo.length - 10
      }
      while (counter !== arreglo.length) {
        lastTenRegisters[counter] = arreglo[counter]
        counter = counter + 1
      }
      setStatus("resolved")
    }

    return
  }, [status])

  return <HomeBody expenses={expenses} income={incomes} register={registers} total={total} />
}

export default Home
