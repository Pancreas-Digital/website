import {
  chakra,
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Link,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';
import { ChatIcon} from '@chakra-ui/icons';
type Props = {
  imgSrc?: string;
  name?: string;
  link?: { text: string; url: string };
  description?: string;
  tags?: string[];
  contactText?: string;
  contact?: { text: string; url: string };
};

export default function SocialProfileSimple({
  imgSrc = '',
  name = '',
  link = { text: '', url: '#' },
  description = '',
  tags = [''],
  contact = { text: '', url: '#' },
}: Props) {
  return (
    <Center py={6}>
      <Box
        maxW={'320px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}
      >
        <Avatar
          size={'xl'}
          src={imgSrc}
          title={name}
          mb={4}
          pos={'relative'}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: 'green.300',
            border: '2px solid white',
            rounded: 'full',
            pos: 'absolute',
            bottom: 0,
            right: 3,
          }}
        />
        <Heading fontSize={'2xl'} fontFamily={'body'} color="blue.600">
          {name}
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4} minHeight="50px">
          <Link href={link.url} target="_blank">
            {link.text}
          </Link>
        </Text>
        <Text minHeight="120px" textAlign={'center'} color={useColorModeValue('gray.700', 'gray.400')} px={3}>
          {description}
        </Text>

        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          {tags.map((tag) => (
            <Badge key={tag} px={2} py={1} bg={useColorModeValue('gray.50', 'gray.800')} fontWeight={'400'}>
              #{tag}
            </Badge>
          ))}
        </Stack>

        <Stack align={'center'} justify={'center'}>
          <Stack direction={'row'} mt={8}>
            <chakra.button
              rounded={'md'}
              h={8}
              w={32}
              cursor={'pointer'}
              as={'a'}
              flex={1}
              fontSize={'sm'}
              bgColor="blue.300"
              href={contact.url}
              target={"_blank"}
              display={'inline-flex'}
              alignItems={'center'}
              justifyContent={'center'}
              transition={'background 0.3s ease'}
              fontWeight="bold"
              _focus={{
                bg: 'blue.300',
              }}
              _hover={{
                bg: 'blue.600',
              }}
            >
              <ChatIcon marginRight="10px" />
              {contact.text}
            </chakra.button>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
