import axios from "axios"

import {register} from "../types/register"

export const addRegister = (concept: string, amount: number, date: string, type: string) => {
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

export const deleteRegister = (id: number) => {
  axios.delete(`http://localhost:3001/api/delete/${id}`)
}

export const getRegisters = () => {
  axios
    .get<register[]>("http://localhost:3001/api/get")
    .then((response) => {
      //const array = response.data

      return response
    })
    .catch((error) => {
      console.log(error)
    })
}

export const updateRegister = (
  id: number,
  concept: string,
  amount: number,
  date: string,
  type: string,
) => {
  deleteRegister(id)
  addRegister(concept, amount, date, type)
}
