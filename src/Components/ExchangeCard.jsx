import React from 'react'
import { Container, HStack, Heading, VStack, Image, Text } from '@chakra-ui/react'


const ExchangeCard = ({name, img, rank, url}) => {
  return (
    <div>
    <a href={url} target={'blank'}>
    <VStack w={52} shadow={'lg'} p={'8'} borderRadius={'lg'} transition={'all 0.3s'}>
      <Image src={img} w={'10'} h={'10'} objectFit={'contain'} alt={"Exchange"} m={'4'} />
      <Heading size={'md'} noOfLines={1}>{rank}</Heading>
      <Text noOfLines={1}>{name}</Text>
    </VStack>
  </a>
    </div>
  )
}

export default ExchangeCard