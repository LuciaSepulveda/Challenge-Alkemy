import {Button, Flex, Stack} from "@chakra-ui/react"
import * as React from "react"

const Header: React.FC = () => {
  return (
    <Flex
      align="center"
      bg="gray.200"
      justify="space-between"
      padding="1.5rem"
      w="90%"
      wrap="wrap"
      margin="auto"
      marginTop={4}
      boxShadow="md"
    >
      <Stack alignItems="center" direction="row" spacing={4}>
        <Button colorScheme="primary" m="auto" p="2">
          Home
        </Button>
        <Stack alignItems="center" direction="row" paddingX={2} paddingY={3}>
          <Button colorScheme="primary" isLoading={false} m="auto" p="2">
            Operaciones
          </Button>
        </Stack>
      </Stack>
    </Flex>
  )
}

export default Header