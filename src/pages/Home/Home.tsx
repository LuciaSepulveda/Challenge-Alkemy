import * as React from "react"
import arreglo from "../../api/arreglo"
import styles from "./Home.module.scss"
import HomeBody from "../../components/HomeBody/HomeBody"

const Home: React.FC = () => {
  let result = 0
  let counter = 0
  const lastTenRegisters = []
  let i = 0

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

  return (
    <div className={styles.container}>
      {result} /{" "}
      {lastTenRegisters.map((elem) => {
        return (
          <div key={i++}>
            {elem.type}
            {elem.amount}
          </div>
        )
      })}
      <HomeBody
        expenses={lastTenRegisters[1].amount}
        income={lastTenRegisters[0].amount}
        register={arreglo}
      />
    </div>
  )
}

export default Home
