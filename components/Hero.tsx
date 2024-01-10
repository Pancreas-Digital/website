import NextLink from 'next/link';
import { Stack, Flex, Button, Text, VStack, useBreakpointValue } from '@chakra-ui/react';
import { FaTelegram } from 'react-icons/fa'

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
                    <Stack direction={'row'} >
                        <Button
                            as={'a'}
                            href={'https://t.me/+ahNWHtI3Lsg0YTNh'}
                            target="_blank"
                            variant={'solid'}
                            colorScheme={'telegram'}
                            mr={4}
                            leftIcon={<FaTelegram />}
                            fontSize={useBreakpointValue({ base: 'xs', md: 'md' })}
                        >
                            Sumate a nuestro Telegram
                        </Button>
                        <NextLink href='/blog' passHref>
                            <Button as='a' bg={'whiteAlpha.300'} color={'white'} _hover={{ bg: 'whiteAlpha.500' }} fontSize={useBreakpointValue({ base: 'xs', md: 'md' })}>
                                Quiero aprender más
                            </Button>
                        </NextLink>

                    </Stack>
                </Stack>
            </VStack>
        </Flex>
    );
}
