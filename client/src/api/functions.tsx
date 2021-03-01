import axios from "axios"

import {register} from "../types/register"

const addRegister = (concept: string, amount: number, date: string, type: string) => {
  axios
    .post("http://localhost:3001/api/insert", {
      concept: concept,
      amount: amount,
      date: date,
      type: type,
    })
    .then(() => {
      console.log("Ingreso correctamente")
    })
    .catch(() => {
      console.log("error al intentar ingresasr el registro")
    })
}

const deleteRegister = (id: number) => {
  axios.delete(`http://localhost:3001/api/delete/${id}`)
}

const getRegisters = () => {
  axios
    .get<register[]>("http://localhost:3001/api/get")
    .then((response) => {
      const array = response.data

      return array
    })
    .catch((error) => {
      console.log(error)
    })
}

export default {
  addRegister,
  deleteRegister,
  getRegisters,
}
