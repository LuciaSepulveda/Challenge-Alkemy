import {Button, Flex, Stack} from "@chakra-ui/react"
import * as React from "react"

interface Props {
  change: () => void
}

const Header: React.FC<Props> = ({change}) => {
  return (
    <Flex
      align="center"
      bg="gray.200"
      borderRadius={5}
      boxShadow="md"
      justify="space-between"
      margin="auto"
      marginTop={4}
      padding="1.5rem"
      w="90%"
      wrap="wrap"
    >
      <Stack alignItems="center" direction="row" spacing={4}>
        <Button colorScheme="primary" m="auto" p="2" onClick={change}>
          Home
        </Button>
        <Stack alignItems="center" direction="row" paddingX={2} paddingY={3}>
          <Button colorScheme="primary" isLoading={false} m="auto" p="2" onClick={change}>
            Operations
          </Button>
        </Stack>
      </Stack>
    </Flex>
  )
}

export default Header
