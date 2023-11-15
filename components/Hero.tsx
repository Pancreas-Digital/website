import { Stack, Flex, Button, Text, VStack, useBreakpointValue } from '@chakra-ui/react';

export default function WithBackgroundImage() {
  return (
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={
        'url(Illustrations.png)'
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
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '4xl', md: '5xl' })}
          >
            Todo sobre tecnología aplicada a la diabetes
          </Text>
          <Stack direction={'row'}>
            <a href='#blog'>
              <Button bg={'blue.300'} color={'white'} _hover={{ bg: 'blue.600' }}>
                Quiero aprender más
              </Button>
            </a>
            <a href='#talleres'>
              <Button bg={'whiteAlpha.300'} color={'white'} _hover={{ bg: 'whiteAlpha.500' }}>
                Mostrame los talleres
              </Button>
            </a>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
