import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import btcSrc from "../Assets/i2.webp";
import { motion } from "framer-motion";
import { Card, CardHeader, CardBody, CardFooter, Container } from '@chakra-ui/react'
import { Stack, Heading ,Button } from '@chakra-ui/react'
const Home = () => {
  return (
    <Card
    marginLeft={20}
    marginRight={20}
    marginTop={40}
    marginBottom={40}

  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={btcSrc}
    // src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md' color={"green.600"
      }>Crypto App</Heading>

      <Text py='2'>
      A cryptocurrency app that lists all the available cryptos in the market.It fetch information from an API and then displaying it in the form of a table to the user.
      Website that displays the real-time value of the top 100 Cryptocurrency and exchange along with their price, price change percentage, market cap value, and volume.
      </Text>
    </CardBody>

    {/* <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Buy Latte
      </Button>
    </CardFooter> */}
  </Stack>
</Card>
  );
};

export default Home;