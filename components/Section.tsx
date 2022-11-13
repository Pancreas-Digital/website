import React, { ReactNode } from 'react';
import { Button,Stack, SlideFade, Heading, Divider, Text, HStack, Wrap, WrapItem, useDisclosure, Grid, GridItem, Center } from '@chakra-ui/react';
import {ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';

type Props = {
  childrens?: ReactNode[];
  title?: string;
  texts?: string[];
  id?: string;
  bottomChildrens?:ReactNode[];
};

export default function Section({ childrens = [<div />],bottomChildrens = [<div />], title = '', texts = [''], id = '' }: Props) {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Stack padding={'9vh'} minHeight={'88vh'} borderTop="1px" borderTopColor="blue.100" id={id}>
      <Heading as="h2" textColor="blue.600" textTransform="uppercase" paddingTop='15px'>
        {title}
      </Heading>
      <Divider
        border={6}
        borderTopColor="blue.600"
        borderLeftColor="blue.50"
        borderRightColor="blue.50"
        borderBottomColor="blue.50"
      />
      {texts.map((text) => (
        <Text fontSize="20px" pt="2" color="blue.50" textColor="blue.600">
          {text}
        </Text>
      ))}
  
  <Grid templateColumns='repeat(10, 1fr)' gap={4}>
  <GridItem colSpan={1} >
    <Center>
    {(childrens.length >= 3) ? <Button textColor="blue.600" onClick={onToggle}><ArrowLeftIcon/></Button>:""} 
    </Center>
  </GridItem>
  <GridItem colSpan={8}>
    <HStack display={{ sm: 'flex' }} alignItems="center" justify="center">
      <Wrap spacing="1" justify="center" alignItems="center">
      {
        childrens.map(
          (children,index) => (
            <SlideFade in={index >= 3 ? isOpen : !isOpen}  unmountOnExit={true} style={{ zIndex: 10, transitionDuration:"300ms" }} offsetX='400px' reverse={true} >
              <WrapItem padding="1">{children}</WrapItem>
            </SlideFade>
          )
        )
      }
      </Wrap>
    </HStack>  
  </GridItem>
  <GridItem colSpan={1}>
    <Center>
    {(childrens.length >= 3) ? <Button textColor="blue.600" onClick={onToggle}><ArrowRightIcon/></Button>:""} 
    </Center>
  </GridItem>
</Grid>
      
      
      {bottomChildrens.map((children) => (
      <HStack display={{ sm: 'flex' }} alignItems="left" justify="left">
        <Wrap spacing="10" justify="left" alignItems="left">
            <WrapItem>{children}</WrapItem>
        </Wrap>
      </HStack>
      ))}
      
    </Stack>
  );
}
