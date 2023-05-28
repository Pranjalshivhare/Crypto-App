import React from 'react'
import { value, HStack, Heading, VStack, Image, Text, RadioGroup, Radio } from '@chakra-ui/react'


const Item = ({title, value}) => {
  return (
    <HStack justifyContent={'space-between'} w={'full'} my={'4'}>
      <Text letterSpacing={'widest'}>{title}</Text>
      <Text>{value}</Text>
    </HStack>
  )
}

export default Item