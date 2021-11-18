import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';

const Links = [
  { text: 'Quienes somos', url: '#quienes-somos', submenu: [] },
  {
    text: 'Todo sobre diabetes', url: '#todo-sobre-diabetes',
    submenu: [
      { text: 'En primera persona', url: '#en-primera-persona' },
      { text: 'Desde adentro', url: '#desde-adentro' },
      { text: 'Psicología', url: '#psicologia' },
      { text: 'Vida saludable', url: '#vida-saludable' },
      { text: 'Ciencia y tecnología', url: '#ciencia-y-tecnologia' }]
  },
  { text: 'Talleres online', url: '#talleres-online', submenu: [] },
  { text: 'Proyectos open source', url: '#proyectos-open-source', submenu: [] },
  { text: 'Escribinos', url: '#escribinos', submenu: [] },
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
        bg={useColorModeValue('blue.50', 'blue.600')}
        px={4}
        sx={{ position: 'sticky', top: '0', 'z-index': '1000' }}
      >
        <Flex minHeight={'9vh'} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Abrir Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            bgColor="blue.50"
            _hover={{
              textDecoration: 'none',
              bgColor: 'blue.50',
            }}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Link title="Pancreas Digital Home">
              <a href='#intro'>
                <Image
                  boxSize="240px"
                  maxHeight="70px"
                  p={2}
                  objectFit="cover"
                  src="HorizontalBlue.png"
                  alt="Pancreas Digital Logo"
                />
              </a>
            </Link>
            <HStack as={'nav'} pl="20" spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link.url}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Button
              variant={'solid'}
              colorScheme={'blue'}
              size={'sm'}
              mr={4}
              leftIcon={<AddIcon />}
              bgColor="blue.300"
              _hover={{
                textDecoration: 'none',
                bgColor: useColorModeValue('blue.600', 'blue.600'),
                textColor: useColorModeValue('blue.50', 'blue.50'),
              }}
            >
              Nightscout
            </Button>
            <Menu>
              <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://avatars.githubusercontent.com/u/250785?s=460&u=05cbfe945b76363071ea27c899549790218dc206&v=4'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Mi perfil</MenuItem>
                <MenuDivider />
                <MenuItem>Cerrar sesión</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.url}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
