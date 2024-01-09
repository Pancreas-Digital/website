import React, { useState, useEffect } from 'react';
import {
    Button, VStack, Text, Flex, Stack,
    useBreakpointValue, Drawer, DrawerBody, DrawerOverlay,
    DrawerContent, DrawerCloseButton, useDisclosure, Heading
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

export default function RegisterWithBackgroundImage() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isDrawerInitiallyOpen, setDrawerInitiallyOpen] = useState(true);

    useEffect(() => {
      if (isDrawerInitiallyOpen) {
        onOpen();
        setDrawerInitiallyOpen(false); // Evita abrir automáticamente en el futuro
      }
    }, [isDrawerInitiallyOpen, onOpen]);

    return (
        <Flex
            w={'full'}
            h={'100vh'}
            backgroundImage={'url(Illustrations.jpg)'}
            backgroundSize={'cover'}
            backgroundPosition={"center center"}
            backgroundRepeat="no-repeat"
            id='intro'
        >
            <VStack
                w={'full'}
                justify={'center'}
                px={useBreakpointValue({ base: 4, md: 8 })}
                bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
            >
                <Stack align={'flex-start'} spacing={6} maxW={'90%'}>
                    <Text
                        color={'white'}
                        fontWeight={700}
                        lineHeight={1.2}
                        fontSize={useBreakpointValue({ base: '4xl', md: '5xl' })}
                    >
                        Conéctate para seguir aprendiendo sobre diabetes y tecnología.
                    </Text>
                    <Text
                        color={'white'}
                        fontWeight={500}
                        fontSize={useBreakpointValue({ base: 'md', md: 'lg' })}
                    >
                        Regístrate para descubrir más o inicia sesión y continúa tu experiencia.
                    </Text>
                    <Stack direction={'row'}>
                        <Button
                            onClick={onOpen}
                            variant={'solid'}
                            colorScheme={'blue'}
                            mr={4}
                            fontSize={useBreakpointValue({ base: 'xs', md: 'md' })}
                        >
                            Regístrate
                        </Button>
                        <Button as='a' href='/login' bg={'whiteAlpha.300'} color={'white'} _hover={{ bg: 'whiteAlpha.500' }} fontSize={useBreakpointValue({ base: 'xs', md: 'md' })}>
                            Inicia sesión
                        </Button>
                    </Stack>
                </Stack>
            </VStack>

            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerBody>
                        <VStack align={'flex-start'} spacing={6} bg={'white'} p={{ base: 4 }} borderRadius={{ md: 'lg' }}>
                            <Heading as="h2" size="lg" mb={4}>Regístrate</Heading>
                            <Button
                                as='a'
                                href='/auth/github'
                                bg={'gray.900'}
                                color={'white'}
                                _hover={{ bg: 'gray.700' }}
                                leftIcon={<FaGithub />}
                                fontSize={'md'}
                                w={'full'}
                                size={'lg'}
                            >
                                Regístrate con GitHub
                            </Button>
                            <Text color={'gray.600'} fontSize={'md'}>
                                ¿Ya tienes una cuenta? <Button as='a' href='/login' variant={'link'} colorScheme={'blue'}>Inicia sesión aquí</Button>
                            </Text>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Flex>
    );
}
