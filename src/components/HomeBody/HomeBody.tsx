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
    <Flex direction="column" flex={1}>
      <Grid bg="red" gap={4} m="auto" templateColumns="repeat(6,1fr)" w="80%">
        <GridItem bg={"yellow"} colSpan={2}>
          {"INCOME"}
        </GridItem>
        <GridItem bg={"black"} colSpan={2}>
          {"EXPENSES"}
        </GridItem>
        <GridItem bg={"blue"} colSpan={2}>
          {"TOTAL"}
        </GridItem>
        <GridItem bg={"gray"} colStart={2} colEnd={6}>
          {"Last ten registers"}
        </GridItem>
        {register.map((elem) => {
          return (
            <GridItem key={elem.concept} colSpan={6}>
              <Flex justify={"space-evenly"}>
                <Box bg={"orange"}>{elem.concept}</Box>
                <Box bg={"green"}>{elem.amount}</Box>
                <Box bg={"red"}>{elem.type}</Box>
                <Box bg={"brown"}>{elem.date}</Box>
              </Flex>
            </GridItem>
          )
        })}
      </Grid>
    </Flex>
  )
}

export default HomeBody
