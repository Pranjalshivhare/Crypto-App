import React from 'react'
import { Badge, Box, Container, Progress, Stat, StatArrow, StatHelpText, StatLabel, StatNumber, VStack, HStack, Text } from '@chakra-ui/react'


const CustomBar = ({high, low}) => {
  return (
    <VStack w={'full'}>
      <Progress value={50} colorScheme={'teal'} w={'full'}/>
      <HStack justifyContent={'space-between'} w={'full'}>
        <Badge children={low} colorScheme={'red'}/>
        <Text fontSize={'sm'}>24H Range</Text>
        <Badge children={high} colorScheme={'green'}/>
      </HStack>
    </VStack>
  )
}

export default CustomBar