'use client'

import { useState } from 'react'
import {
  Box,
  Heading,
  Text,
  Img,
  Flex,
  Center,
  useColorModeValue,
  HStack,
  Stack,
  Badge
} from '@chakra-ui/react'
import { BsArrowUpRight, BsHeartFill, BsHeart, BsArrowDown } from 'react-icons/bs'
import Link from 'next/link';

type Props = {
  imgSrc?: string;
  name?: string;
  url?:string;
  link?: { text: string; url: string };
  description?: string;
  tags?: string[];
};


export default function PostWithLike({
  imgSrc = '',
  name = '',
  url = '',
  link = { text: '', url: '#' },
  description = '',
  tags = [''],
}: Props) {
  const [liked, setLiked] = useState(false)

  return (
    <Center py={6}>
      <Box
        w="xs"
        rounded={'sm'}
        my={5}
        mx={[0, 5]}
        overflow={'hidden'}
        bg="white"
        border={'1px'}
        borderColor="black"
        boxShadow={useColorModeValue('6px 6px 0 black', '6px 6px 0 cyan')}>
        <Box h={'200px'} borderBottom={'1px'} borderColor="black">
          <Img
            src={imgSrc}
            roundedTop={'sm'}
            objectFit="cover"
            h="full"
            w="full"
            alt={'Blog Image'}
          />
        </Box>
        <Box p={4}>
          <Stack align={'right'} justify={'right'} direction={'row'} mt={6}>
          {tags.map((tag) => (
            <Badge rounded={'md'} bg="blue.300" px={2} py={1} color="white" fontWeight={'md'} fontSize={'xs'} >
              {tag}
            </Badge>
          ))}
          </Stack>
          <Heading as='a' href={url} target={"_blank"} color={'blue.600'} fontSize={'2xl'} noOfLines={1}>
              {name}
          </Heading>
          <Text color={'gray.500'} noOfLines={2} as='a' href={url} target={"_blank"}>
            {description}
          </Text>
        </Box>
        <HStack borderTop={'1px'} color="black">
          <Flex
            p={4}
            as='a'
            href={link.url}
            alignItems="center"
            justifyContent={'space-between'}
            roundedBottom={'sm'}
            cursor={'pointer'}
            w="full">
            <Text fontSize={'md'} fontWeight={'semibold'}>
              {link.text}
            </Text>
            <BsArrowDown/>
          </Flex>
        
          <Flex
            p={4}
            alignItems="center"
            justifyContent={'space-between'}
            roundedBottom={'sm'}
            borderLeft={'1px'}
            cursor="pointer"
            onClick={() => setLiked(!liked)}>
            {liked ? (
              <BsHeartFill fill="red" fontSize={'24px'} />
            ) : (
              <BsHeart fontSize={'24px'} />
            )}
          </Flex>
        </HStack>
      </Box>
    </Center>
  )
}