import { Stack, Flex, Button, Text, VStack, useBreakpointValue } from '@chakra-ui/react';

export default function WithBackgroundImage() {
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
            Todo sobre tecnología aplicada a la diabetes
          </Text>
          <Stack direction={'row'}>
              <Button as='a' href='#blog' bg={'blue.300'} color={'white'} _hover={{ bg: 'blue.600' }}>
                Quiero aprender más
              </Button>
              <Button as='a' href='#talleres' bg={'whiteAlpha.300'} color={'white'} _hover={{ bg: 'whiteAlpha.500' }}>
                Mostrame los talleres
              </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
