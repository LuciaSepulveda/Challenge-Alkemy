import {Box, Button, Container, Flex, Stack} from "@chakra-ui/react"
import * as React from "react"

const Header: React.FC = () => {
  return (
    <Flex direction="column" flex={1}>
      <Box bg="gray.100" boxShadow="md" m="auto" w="90%">
        <Container maxWidth="6xl">
          <Stack
            alignItems="center"
            as="nav"
            direction="row"
            justifyContent="space-between"
            paddingY={3}
          >
            <Stack alignItems="center" direction="row" spacing={4}>
              <Button colorScheme="teal" m="auto" p="2">
                Home
              </Button>
              <Stack alignItems="center" direction="row" paddingX={2} paddingY={3}>
                <Button colorScheme="teal" isLoading={false} m="auto" p="2">
                  Operaciones
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Flex>
  )
}

export default Header
