import {Box, Center, Flex, Grid, GridItem} from "@chakra-ui/react"
import * as React from "react"
import arreglo from "../../api/arreglo"

interface Props {
  income: number
  expenses: number
  register: typeof arreglo
}

const HomeBody: React.FC<Props> = ({income, expenses, register}) => {
  return (
    <Flex direction="column" flex={1} marginTop={10}>
      <Grid
        bg="whiteAlpha.400"
        gap={4}
        h="auto"
        m="auto"
        padding={2}
        templateColumns="repeat(6,1fr)"
        w="80%"
      >
        <GridItem colSpan={2}>
          {"INCOME: "}
          {income}
        </GridItem>
        <GridItem colSpan={2}>
          {"EXPENSES: "}
          {expenses}
        </GridItem>
        <GridItem colSpan={2}>{"TOTAL"}</GridItem>
        <GridItem bg="gray.400" colStart={2} colEnd={6}>
          {"Last ten registers"}
        </GridItem>
        {register.map((elem) => {
          return (
            <GridItem key={elem.concept} colSpan={6}>
              <Flex justify={"space-evenly"}>
                <Box>{elem.concept}</Box>
                <Box>{elem.amount}</Box>
                <Box>{elem.type}</Box>
                <Box>{elem.date}</Box>
              </Flex>
            </GridItem>
          )
        })}
      </Grid>
    </Flex>
  )
}

export default HomeBody
