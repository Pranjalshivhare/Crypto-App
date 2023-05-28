import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Container } from '@chakra-ui/react'
import { Image, Stack, Heading,Text, Divider, Button, ButtonGroup } from '@chakra-ui/react'
import btcSrc from "../Assets/i2.webp";

const About = () => {
  return (
    <Container  alignItems={'center'} >
        <Card maxW={'container.xl'} m={'2'}>
  <CardBody>
    <Image
      src={btcSrc}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Crypto App</Heading>
      <Text>
      A fully featured Crypto Screener application that lists all the available cryptos in the market using Crypto APIs provided by CoinGecko..It fetch information from an API and then displaying it in the form of a table to the user.
      Implementing using some concepts such as state, useEffect, useParams, React-Router, Context API, axios etc.
      </Text>
      
    </Stack>
  </CardBody>
  <Divider />
  
</Card>
    </Container>
 
  )
}

export default About