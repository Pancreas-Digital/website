import {
  Box,
  Center,
  Heading,
  Text,
  Badge,
  Stack,
  Image,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react'

type Props = {
  post?: { title: string; url: string; imgSrc: string;   text?: string; date?:string};
  tags?: string[];
  author?: { name: string; imgSrc: string; url: string; };
};
const cutText = (text: string, maxLength: number = 200) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}

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
        <Stack as={'a'} href={post.url} target={"_blank"}>
          <Stack align={'center'} justify={'center'} direction={'row'}>
            <Image
                objectFit={'cover'}
                boxSize='250px'
                src={post.imgSrc}
                fallbackSrc={'Illustrations.jpg'}
                alt={post.title}
                as={'img'}
            />
          </Stack>
          <Stack align={'right'} justify={'right'} direction={'row'} mt={6}>
          {tags.map((tag) => (
            <Badge key={tag} rounded={'md'} bg="blue.300" px={2} py={1} color="white" fontWeight={'md'} fontSize={'xs'} >
              {cutText(tag,12)}
            </Badge>
          ))}
          </Stack>
        
          <Heading
            mt={2}
            color={useColorModeValue('blue.600', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}
            noOfLines={2}
            style={{ height: '4.5rem' }} >
            {cutText(post.title,40)}
          </Heading>
          <Text color={'gray.500'}>
            {cutText(post.text as string,150)}
          </Text>
          <br /> 
          <Text color={'gray.500'} as='b'>Haz click para seguir leyendo</Text>
 
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'} color={useColorModeValue('blue.600', 'white')}>
          <Avatar src={author.imgSrc} as={"a"} href={author.url} target={"_blank"}/>
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600} as={"a"} href={author.url} target={"_blank"} noOfLines={1}>{author.name}</Text>
            <Text color={'gray.500'}>{post.date}</Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  )
}