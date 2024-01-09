import React, { useState, useEffect } from 'react';
import {
    Button, VStack, Text, Flex, Stack,
    useBreakpointValue, Drawer, DrawerBody, DrawerOverlay,
    DrawerContent, DrawerCloseButton, useDisclosure, Heading
  } from '@chakra-ui/react';
  import { FaGithub } from 'react-icons/fa';
  
  export default function LoginWithBackgroundImage() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isDrawerInitiallyOpen, setDrawerInitiallyOpen] = useState(true);
  
    useEffect(() => {
      if (isDrawerInitiallyOpen) {
        onOpen();
        setDrawerInitiallyOpen(false); // Avoid automatically open in the future
      }
    }, [isDrawerInitiallyOpen, onOpen]);

    return (
    <Flex
        w={'full'}
        h={'100vh'}
        backgroundImage={
          'url(Illustrations.jpg)'
        }
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
          <Stack align={'flex-start'} spacing={6} maxW={'90%'}
  >
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '4xl', md: '5xl' })}
            >
             Únete a nuestra comunidad digital sobre diabetes y tecnología.
            </Text>
            <Text
              color={'white'}
              fontWeight={500}
              fontSize={useBreakpointValue({ base: 'md', md: 'lg' })}
            >
              Regístrate para descubrir más o inicia sesión y continúa tu experiencia.
            </Text>
            <Stack direction={'row'} >
              <Button as='a' href='/register' bg={'whiteAlpha.300'} color={'white'} _hover={{ bg: 'whiteAlpha.500' }} fontSize={useBreakpointValue({ base: 'xs', md: 'md' })}>
                Regístrate ahora
              </Button>
              <Button
                onClick={onOpen}
                variant={'solid'}
                colorScheme={'blue'}
                ml={4}
                fontSize={useBreakpointValue({ base: 'xs', md: 'md' })}
              >
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
              <Heading as="h2" size="lg" mb={4}>Inicia sesión</Heading>
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
                Iniciar sesión con GitHub
              </Button>
              <Text color={'gray.600'} fontSize={'md'}>
                ¿Aún no estás registrado? <Button as='a' href='/register' variant={'link'} colorScheme={'blue'}>Crea tu cuenta aquí</Button>
              </Text>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
    );
  }
  