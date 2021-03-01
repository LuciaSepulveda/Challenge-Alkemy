import {Box, Flex, Grid, GridItem, Text} from "@chakra-ui/react"
import * as React from "react"
import {register} from "../../types/register"

interface Props {
  income: number
  expenses: number
  register: register[]
  total: number
}

const HomeBody: React.FC<Props> = ({income, expenses, register, total}) => {
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
          <Text align="center" fontSize={{base: "5xl", sm: "2xl", md: "3xl"}} m="auto">
            {"Income"}
          </Text>
        </GridItem>
        <GridItem colSpan={2}>
          <Text align="center" fontSize={{base: "5xl", sm: "2xl", md: "3xl"}} m="auto">
            {"Expense"}
          </Text>
        </GridItem>
        <GridItem colSpan={2}>
          <Text align="center" fontSize={{base: "5xl", sm: "2xl", md: "3xl"}} m="auto">
            {"Total"}
          </Text>
        </GridItem>
        <GridItem colSpan={2}>
          <Text
            align="center"
            color="green.400"
            fontSize={{base: "6xl", sm: "2xl", md: "3xl"}}
            m="auto"
          >
            {"$"}
            {income}
          </Text>
        </GridItem>
        <GridItem colSpan={2}>
          <Text
            align="center"
            color="red.400"
            fontSize={{base: "6xl", sm: "2xl", md: "3xl"}}
            m="auto"
          >
            {"$"}
            {expenses}
          </Text>
        </GridItem>
        <GridItem colSpan={2}>
          <Text
            align="center"
            color="blue.500"
            fontSize={{base: "6xl", sm: "2xl", md: "3xl"}}
            m="auto"
          >
            {"$"}
            {total}
          </Text>
        </GridItem>
        <GridItem bg="gray.400" borderRadius={10} boxShadow="lg" colEnd={5} colStart={3}>
          <Text align="center" fontSize={{base: "6xl", sm: "xl", md: "2xl"}} m="auto">
            {"Last ten registers"}
          </Text>
        </GridItem>
        <GridItem bg="gray.200" colSpan={6}>
          <Grid p={2} bg="gray.300" templateColumns="repeat(4,1fr)">
            <Box m="auto" fontWeight="bold">
              {"Concept"}
            </Box>
            <Box m="auto" fontWeight="bold">
              {"Amount"}
            </Box>
            <Box m="auto" fontWeight="bold">
              {"Type"}
            </Box>
            <Box m="auto" fontWeight="bold">
              {"Date"}
            </Box>
          </Grid>
          {register.map((elem) => {
            return (
              <Grid
                key={elem.concept + elem.id}
                boxShadow="md"
                p={2}
                templateColumns={{sm: "repeat(1,1fr)", md: "repeat(4,1fr)"}}
              >
                <Box m="auto">{elem.concept}</Box>
                <Box m="auto">{elem.amount}</Box>
                <Box m="auto">{elem.type}</Box>
                <Box m="auto">{elem.date}</Box>
              </Grid>
            )
          })}
        </GridItem>
      </Grid>
    </Flex>
  )
}

export default HomeBody
