import React, { ReactNode } from 'react';
import { Stack, Heading, Divider, Text, HStack, Wrap, WrapItem, Grid, GridItem} from '@chakra-ui/react';


type Props = {
  childrens?: ReactNode[];
  title?: string;
  texts?: string[];
  id?: string;
  bottomChildrens?:ReactNode[];
};

export default function Section({ childrens = [<div />],bottomChildrens = [<div />], title = '', texts = [''], id = '' }: Props) {
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
        <GridItem colSpan={9}>
          <HStack display={{ sm: 'flex' }} alignItems="center" justify="center">
            <Wrap spacing="8" justify="center" alignItems="center">
            {
              childrens.map(
                (children) => (
                    <WrapItem padding="1">{children}</WrapItem>
                )
              )
            }
            </Wrap>
          </HStack>  
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
