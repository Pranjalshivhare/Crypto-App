import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import {server} from "../index"
import { Container, HStack, Heading, VStack, Image, Text, RadioGroup, Radio } from '@chakra-ui/react'
import Loader from './Loader'
import ExchangeCard from './ExchangeCard'
import Error from './Error'
import CoinCard from './CoinCard'

const Coins = () => {

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState('inr');

  const currencySymbol = currency==='inr' ? '₹' : currency==='eur'? '€' : '$';

  useEffect (() => {
    
    const fetchCoins = async() => {
      try{
        const {data} = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
        setCoins(data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
  }, [currency, page]);
  
  if(error) return <Error message={'error in coin page!'}/>

  return (
    <Container maxW={'container.xl'}>
      {loading ? (<Loader/>) : (
        <>

          <RadioGroup value={currency} onChange={setCurrency} p={'8'}>
            <HStack spacing={'4'}>
              <Radio value={'inr'}>INR(₹)</Radio>
              <Radio value={'eur'}>EUR(€)</Radio>
              <Radio value={'usd'}>USD($)</Radio>
            </HStack>
          </RadioGroup>
          
           <HStack wrap={'wrap'} justifyContent={'space-evenly'}>
            {coins.map((i) => (
              // <div>{i.name}</div>
              <CoinCard id={i.id} key={i.id} name={i.name} img={i.image} symbol={i.symbol} price={i.current_price} currencySymbol={currencySymbol} />
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

export default Coins;