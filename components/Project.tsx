'use client'

import {ReactNode} from 'react'
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
  Badge,
  Tooltip,
  Image
} from '@chakra-ui/react'
import { BsArrowUpRight } from 'react-icons/bs'

type Props = {
  imgSrc?: string;
  name?: string;
  url?:string;
  link?: { text: string; url: string;icon: ReactNode };
  description?: string;
  tags?: string[];
  iconSrc?: string;
};


export default function PostWithLike({
  imgSrc = '',
  name = '',
  url = '',
  link = { text: '', url: '#',icon : <BsArrowUpRight /> },
  description = '',
  tags = [''],
  iconSrc = '',
}: Props) {

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
        borderColor="blue.600"
        boxShadow={useColorModeValue('6px 6px 0 #2B6CB0', '6px 6px 0 #EBF8FF')}>
        <Box h={'200px'} borderBottom={'1px'} borderColor="blue.600">
          <Img
            src={imgSrc}
            roundedTop={'sm'}
            objectFit="cover"
            h="full"
            w="full"
            alt={name+' Image'}
          />
        </Box>
        <Box p={4}>
          <Stack align={'right'} justify={'right'} direction={'row'} mt={6}>
          {tags.map((tag) => (
            <Badge key={tag} rounded={'md'} bg="blue.300" px={2} py={1} color="white" fontWeight={'md'} fontSize={'xs'} >
              {tag}
            </Badge>
          ))}
          </Stack>
          <Heading as='a' href={url} target={"_blank"} color={'blue.600'} fontSize={'2xl'} noOfLines={1}>
              {name}
          </Heading>
          <Tooltip label={description} aria-label='A tooltip' placement='auto-start'>
            <Text color={'gray.500'} noOfLines={2} as='a' href={url} target={"_blank"}>
            {description}
            </Text>
          </Tooltip>
        </Box>
        <HStack borderTop={'1px'} color="blue.600">
          <Flex
            p={4}
            as='a'
            href={link.url}
            target={"_blank"}
            alignItems="center"
            justifyContent={'space-between'}
            roundedBottom={'sm'}
            cursor={'pointer'}
            w="full">
            <Text fontSize={'md'} fontWeight={'semibold'}>
              {link.text}
            </Text>
            {link.icon}
          </Flex>
        
          <Flex
            p={4}
            alignItems="center"
            justifyContent={'space-between'}
            roundedBottom={'sm'}
            borderLeft={'1px'}
          >  
            <Image
              w='25px'
              src={iconSrc}
              alt={name+' Icon'}
            />
          </Flex>
        </HStack>
      </Box>
    </Center>
  )
}