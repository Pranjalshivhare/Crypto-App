import { Box, Spinner, VStack } from '@chakra-ui/react'
import React from 'react'

const Loader = () => {
  return (
    <VStack alignContent={'center'} h={'90'} justifyContent={'center'}>
      <Box transform={'scale(2)'}>
        <Spinner size={'xl'}/>
      </Box>
    </VStack>
  )
}

export default Loader