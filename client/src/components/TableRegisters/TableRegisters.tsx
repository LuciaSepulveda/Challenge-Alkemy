import {DeleteIcon, EditIcon} from "@chakra-ui/icons"
import {Box, Button, Flex, Grid, GridItem, HStack, Text} from "@chakra-ui/react"
import * as React from "react"
import {register} from "../../types/register"
import {updateRegister} from "../../api/functions"
import GridRegister from "../GridRegister/GridRegister"

interface Props {
  registers: register[]
  type: string
}

const TableRegisters: React.FC<Props> = ({type, registers}) => {
  const [update, setUpdate] = React.useState<boolean>(false)
  const updateReg = (id: number, concept: string, amount: number, date: string, type: string) => {
    updateRegister(id, concept, amount, date, type)
  }

  return (
    <Flex direction="column" flex={1} marginTop={10}>
      <Grid gap={4} h="auto" m="auto" padding={2} templateColumns="repeat(4,1fr)" w="80%">
        <GridItem>
          <Text align="center" m="auto">
            {"Concept"}
          </Text>
        </GridItem>
        <GridItem>
          <Text align="center" m="auto">
            {"Amount"}
          </Text>
        </GridItem>
        <GridItem>
          <Text align="center" m="auto">
            {"Date"}
          </Text>
        </GridItem>
        <GridItem />
        <GridItem colSpan={6}>
          <Grid bg="gray.300" p={2} templateColumns="repeat(4,1fr)">
            <Box fontWeight="bold" m="auto">
              {"Concept"}
            </Box>
            <Box fontWeight="bold" m="auto">
              {"Amount"}
            </Box>
            <Box fontWeight="bold" m="auto">
              {"Date"}
            </Box>
          </Grid>
          {registers.map((elem) => {
            return <GridRegister key={elem.concept + elem.id} elem={elem} />
          })}
        </GridItem>
      </Grid>
    </Flex>
  )
}

export default TableRegisters
