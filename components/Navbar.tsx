import { Box, Flex, HStack, Image, Link, IconButton, Button, useDisclosure, Stack } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { FaYoutube } from 'react-icons/fa';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

type NavLinkProps = {
    text: string;
    url: string;
};

const Links: NavLinkProps[] = [
    { text: 'Comunidad', url: '/comunidad' },
    { text: 'Tecnología', url: '/tecnologia' },
    { text: 'Talleres', url: '/talleres' },
    { text: 'Blog', url: '/blog' },
    { text: 'Tutoriales', url: '/tutoriales' },
];

const NavLink = ({ text, url }: NavLinkProps) => {
    const router = useRouter();
    const isActive = router.pathname === url;

    return (
        <NextLink href={url} passHref>
            <Link
                px={2}
                py={2}
                fontWeight="bold"
                fontSize="xs"
                border="4px"
                borderTopColor={'blue.50'}
                borderLeftColor={'blue.50'}
                borderRightColor={'blue.50'}
                borderBottomColor={isActive ? 'red.700' : 'blue.50'}
                bgColor={'blue.50'}
                textColor={isActive ? 'red.700' : 'blue.600'}
                _hover={{
                    textDecoration: 'none',
                    textColor: 'red.700',
                }}
                _focus={{
                    textDecoration: 'none',
                    borderBottomColor: 'red.700',
                    textColor: 'red.700',
                }}
                rounded={'md'}
            >
                {text.toUpperCase()}
            </Link>
        </NextLink>
    );
};

export default function WithAction() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box
                borderWidth='2px'
                bg='blue.50'
                px={4}
                sx={{ position: 'sticky', top: '0', zIndex: '1000', overflowX: 'hidden' }}
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
                        <NextLink href='/' passHref>
                            <Link>
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
                        </NextLink>
                        <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link) => (
                                <NavLink key={link.url} {...link} />
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
                            Suscríbete en YouTube
                        </Button>
                    </Flex>
                </Flex>

                {isOpen && (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <NavLink key={link.url} {...link} />
                            ))}
                        </Stack>
                    </Box>
                )}
            </Box>
        </>
    );
}
