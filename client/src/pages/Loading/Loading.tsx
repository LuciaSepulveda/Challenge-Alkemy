import {Box, Spinner} from "@chakra-ui/react"
import * as React from "react"

import styles from "./Loading.module.scss"

interface Props {
  h: string
}

const Loading: React.FC<Props> = ({h}) => {
  return (
    <Box minHeight={h} mt="100px">
      <Spinner />
    </Box>
  )
}

export default Loading
