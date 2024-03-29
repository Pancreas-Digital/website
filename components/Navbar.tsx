import {
  Box,
  Flex,
  HStack,
  Image,
  Link,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon,} from '@chakra-ui/icons';
import { FaYoutube } from 'react-icons/fa';

const Links = [
  { text: 'Comunidad', url: '#comunidad', submenu: [] },
  { text: 'Tecnología', url: '#tecnologia', submenu: [] },
  { text: 'Talleres', url: '#talleres', submenu: [] },
  {
    text: 'Blog', url: '#blog',
    submenu: [
      { text: 'En primera persona', url: '#en-primera-persona' },
      { text: 'Desde adentro', url: '#desde-adentro' },
      { text: 'Psicología', url: '#psicologia' },
      { text: 'Vida saludable', url: '#vida-saludable' },
      { text: 'Ciencia y tecnología', url: '#ciencia-y-tecnologia' }]
  },
  { text: 'Tutoriales', url: '#tutoriales', submenu: [] },
];
type Children = {
  text: string;
  url: string;
};
const NavLink = ({ children }: { children: Children }) => (
  <Link
    px={2}
    py={2}
    fontWeight="bold"
    fontSize="xs"
    border="4px"
    borderTopColor="blue.50"
    borderLeftColor="blue.50"
    borderRightColor="blue.50"
    borderBottomColor="blue.50"
    bgColor="blue.50"
    textColor="blue.600"
    _hover={{
      textDecoration: 'none',
      borderBottomColor: useColorModeValue('red.700', 'red.700'),
      textColor: useColorModeValue('red.700', 'red.700'),
    }}
    _focus={{
      textDecoration: 'none',
      borderBottomColor: useColorModeValue('red.700', 'red.700'),
      textColor: useColorModeValue('red.700', 'red.700'),
    }}
    rounded={'md'}
    href={children.url}
  >
    {children.text.toUpperCase()}
  </Link>
);

export default function withAction() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box 
       borderWidth='2px'
       bg={useColorModeValue('blue.50', 'blue.600')}
       px={4}
       sx={{ position: 'sticky', top: '0', 'z-index': '1000','overflowX': 'hidden'  }}
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            backgroundColor={'blue.50'}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Link href='#intro'>
              <Image
                  boxSize="240px"
                  maxHeight="70px"
                  p={2}
                  objectFit="cover"
                  src="HorizontalBlue.png"
                  alt="Pancreas Digital Logo"
                  loading='lazy'
                />
            </Link>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link.url
                }>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Button
            as={'a'}
            href={'https://youtube.com/@PancreasDigital?sub_confirmation=1'} 
            target="_blank"
              variant={'solid'}
              colorScheme={'red'}
              size={'sm'}
              mr={4}
              leftIcon={<FaYoutube />}
            >
              Suscribite en Youtube
            </Button>          
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}