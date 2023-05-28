import React from 'react'
import { Container, HStack, Heading, VStack, Image, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const CoinCard = ({id, name, img, symbol, price, currencySymbol="₹"}) => {
  return (
    <div>
    <Link to={`/coin/${id}`} >
    <VStack w={'52'} shadow={'lg'} p={'8'} borderRadius={'lg'} transition={'all 0.3s'}>
      <Image src={img} w={'10'} h={'10'} objectFit={'contain'} alt={"Coin"} m={'4'} />
      <Heading size={'md'} noOfLines={1}>{symbol}</Heading>
      <Text noOfLines={1}>{name}</Text>
      <Text noOfLines={1}>{price ? `${currencySymbol}${price}` : "NA" }</Text>

    </VStack>
  </Link>
    </div>
  )
}

export default CoinCard