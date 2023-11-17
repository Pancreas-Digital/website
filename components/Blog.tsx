import Image from 'next/image'
import {
  Box,
  Center,
  Heading,
  Text,
  Badge,
  Stack,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react'

type Props = {
  post?: { title: string; url: string; imgSrc: string;   text?: string; date?:string};
  tags?: string[];
  author?: { name: string; imgSrc: string; url: string; };
};

export default function BlogPostWithImage({
  post = { title: '', url: '#',imgSrc:'', text:'', date:'' },
  tags = [''],
  author = { name: '', url: '#',imgSrc:'' },
  }: Props) {
  return (
    <Center py={6}>
      <Box
        w="xs"
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box h={'210px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'} >
          <Image
           objectFit='cover'
            src={post.imgSrc}
            fill
            alt={post.title}
          />
        </Box>
        <Stack as={'a'} href={post.url} target={"_blank"}>
          <Stack align={'right'} justify={'right'} direction={'row'} mt={6}>
          {tags.map((tag) => (
            <Badge key={tag} rounded={'md'} bg="blue.300" px={2} py={1} color="white" fontWeight={'md'} fontSize={'xs'} >
              {tag}
            </Badge>
          ))}
          </Stack>
        
          <Heading
            color={useColorModeValue('blue.600', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            {post.title}
          </Heading>
          <Text color={'gray.500'}>
            {post.text}
          </Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'} color={useColorModeValue('blue.600', 'white')}>
          <Avatar src={author.imgSrc} as={"a"} href={author.url} target={"_blank"}/>
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600} as={"a"} href={author.url} target={"_blank"}>{author.name}</Text>
            <Text color={'gray.500'}>{post.date}</Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  )
}