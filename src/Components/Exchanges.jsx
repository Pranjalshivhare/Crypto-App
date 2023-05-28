import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import {server} from "../index"
import { Container, HStack, Heading, VStack, Image, Text } from '@chakra-ui/react'
import Loader from './Loader'
import ExchangeCard from './ExchangeCard'
import Error from './Error'

const Exchanges = () => {

  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect (() => {
    

   

    const fetchExchanges = async() => {
      try{
        const {data} = await axios.get(`${server}/exchanges`);
        setExchanges(data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchExchanges();
  }, []);
  
  if(error) return <Error/>

  return (
    <Container maxW={'container.xl'}>
      {loading ? (<Loader/>) : (
        <>
           <HStack wrap={'wrap'} justifyContent={'space-evenly'}>
            {exchanges.map((i) => (
              // <div>{i.name}</div>
              <ExchangeCard key={i.id} name={i.name} img={i.image} rank={i.trust_score_rank} url={i.url}/>
            ))}
           </HStack>
        </>
      )}
    </Container>
  )
}

// const ExchangeCard = ({name, img, rank, url}) => {
//   <a href={url} target={'blank'}>
//     <VStack>
//       <Image src={img} w={'10'} h={'10'} objectFit={'contain'} alt={"Exchange"}/>
//       <Heading size={'md'} noOfLines={1}>{rank}</Heading>
//       <Text noOfLines={1}>{name}</Text>
//     </VStack>
//   </a>
// }

export default Exchanges;