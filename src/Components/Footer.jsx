import { Avatar, Box, Stack, Text, VStack, Heading, Input, Button } from "@chakra-ui/react";
import React from "react";
import {AiOutlineSend} from "react-icons/ai";

import { HStack } from "@chakra-ui/react";
const avatarSrc = "https://avatars.githubusercontent.com/u/25058652";
// import {AiOutlineSend} from 'react-icons';
const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={""}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are the best crypto trading app in India, we provide our guidance
            at a very cheap price.
          </Text>
        </VStack>

        {/* <VStack> */}
          {/* <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarSrc} />
          <Text>Our Founder</Text> */}

<Box bgColor={'blackAlpha.900'} minH={'40'} p={'6'} color={'white'}>
         <Stack direction={['column', 'row']}>
            <VStack>
                <Heading size={'md'} textTransform={'uppercase'}>
                    Subscribe to get updates
                </Heading>
                <HStack borderBottom={'2px solid white'} py={'2'}>
                    <Input placeholder='Enter Email here...' border={'none'} borderRadius={'none'} outline={'none'} focusBorderColor={'none'}/>
                    <Button p={'0'} colorScheme={'purple'} varient={'ghost'} borderRadius={'0 20px 20px 0'}>
                        <AiOutlineSend/>
                    </Button>
                </HStack>
            </VStack>
         </Stack>
    </Box>
        {/* </VStack> */}
      </Stack>
    </Box>
  );
};

export default Footer;