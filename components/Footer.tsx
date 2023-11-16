import { Box, Container, Stack, Text, useColorModeValue,Link, Image } from '@chakra-ui/react';
import { FaFacebook, FaGithub, FaYoutube, FaInstagram, FaTelegram, FaLinkedin, FaBlogger, FaTiktok } from 'react-icons/fa';
import SocialButton from '../components/SocialButton';

export default function SmallWithSocial() {
  return (
    <Box bg={useColorModeValue('blue.300', 'blue.600')} color={useColorModeValue('blue.50', 'blue.600')}>
      <Container
        as={Stack}
        maxW={'90%'}
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
        <Stack direction={'row'} spacing={1}>
        <SocialButton label={'YouTube'} href={'https://youtube.com/@PancreasDigital'}>
            <FaYoutube />
          </SocialButton>
          <SocialButton label={'Blogger'} href={'https://pancreasdigital.blogspot.com/'}>
            <FaBlogger />
          </SocialButton>
          <SocialButton label={'Instagram de Dani'} href={'https://www.instagram.com/cadapersonaunmundo/'}>
            <FaInstagram />
          </SocialButton>
          <SocialButton label={'Instagram de Fede'} href={'https://www.instagram.com/PancreasDigital/'}>
            <FaInstagram />
          </SocialButton>
          <SocialButton label={'X'} href={'https://x.com/PancreasDigital'}>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
              <path fill="currentColor" stroke="currentColor" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
            </svg>
          </SocialButton>
          <SocialButton label={'Facebook'} href={'https://www.facebook.com/PancreasDigital/'}>
            <FaFacebook />
          </SocialButton>
          <SocialButton label={'TikTok'} href={'https://www.tiktok.com/@pancreasdigital'}>
            <FaTiktok />
          </SocialButton>
          <SocialButton label={'Github'} href={'https://github.com/Pancreas-Digital'}>
            <FaGithub />
          </SocialButton>
          <SocialButton label={'Linkedin'} href={'https://www.linkedin.com/company/pancreas-digital'}>
            <FaLinkedin />
          </SocialButton>
          <SocialButton label={'Telegram'} href={'https://t.me/+ahNWHtI3Lsg0YTNh'}>
            <FaTelegram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
