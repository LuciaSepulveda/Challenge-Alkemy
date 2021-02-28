import * as React from "react"
import arreglo from "../../api/arreglo"
import HomeBody from "../../components/HomeBody/HomeBody"
import {registersRef} from "../../firebase"

const Home: React.FC = () => {
  let result = 0
  let counter = 0
  const lastTenRegisters = []
  const i = 0

  arreglo.map((elem) => {
    if (elem.type === "ingreso") {
      result = result + elem.amount
    } else result = result - elem.amount
  })

  if (arreglo.length > 11) {
    counter = arreglo.length - 10
  }
  while (counter !== arreglo.length) {
    lastTenRegisters[counter] = arreglo[counter]
    counter = counter + 1
  }

  registersRef.once("value", (snapshot) => {
    const arreglo: {key: string | null; hola: any}[] = []
    const items = snapshot.val()

    snapshot.forEach((childSnapshot) => {
      arreglo.push({key: childSnapshot.key, hola: childSnapshot.val().hola})
    })
    console.log(arreglo.length)
    arreglo.map((item) => {
      console.log(item)
    })
    /*for (const item in items) {
    }*/
  })

  return (
    <HomeBody
      expenses={lastTenRegisters[1].amount}
      income={lastTenRegisters[0].amount}
      register={arreglo}
    />
  )
}

export default Home
