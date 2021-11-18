import { Box, chakra, Container, Stack, Text, useColorModeValue, VisuallyHidden, Link, Image } from '@chakra-ui/react';
import { FaGithub, FaTwitter, FaYoutube, FaInstagram, FaTelegram } from 'react-icons/fa';
import { ReactNode } from 'react';

const SocialButton = ({ children, label, href }: { children: ReactNode; label: string; href: string }) => {
  return (
    <chakra.button
      bg={useColorModeValue('whiteAlpha.100', 'blackAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      target="_blank"
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallWithSocial() {
  return (
    <Box bg={useColorModeValue('blue.300', 'blue.600')} color={useColorModeValue('blue.50', 'blue.600')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Link href={'/'} title="Pancreas Digital Home">
          <Image boxSize="150px" maxHeight="50px" objectFit="cover" src="Horizontal.png" alt="Diabetes Circle Logo" />
        </Link>
        <Text>© 2021 Pancreas Digital. Todos los derechos reservados</Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Twitter'} href={'https://twitter.com/fedemotta_'}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={'Instagram'} href={'https://www.instagram.com/fedemotta_/'}>
            <FaInstagram />
          </SocialButton>
          <SocialButton label={'YouTube'} href={'https://www.youtube.com/c/PancreasDigital'}>
            <FaYoutube />
          </SocialButton>
          <SocialButton label={'Telegram'} href={'https://t.me/joinchat/ahNWHtI3Lsg0YTNh'}>
            <FaTelegram />
          </SocialButton>
          <SocialButton label={'Github'} href={'https://github.com/Pancreas-Digital'}>
            <FaGithub />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
