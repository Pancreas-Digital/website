import React, { ReactNode } from 'react';
import { Stack, Heading, Divider, Text, HStack, Wrap, WrapItem } from '@chakra-ui/react';
type Props = {
  childrens?: ReactNode[];
  title?: string;
  texts?: string[];
  id?: string;
};

export default function Section({ childrens = [<div />], title = '', texts = [''], id = '' }: Props) {
  return (
    <Stack padding={'9vh'} minHeight={'91vh'} borderTop="1px" borderTopColor="blue.100" id={id}>
      <Heading as="h2" textColor="blue.600" textTransform="uppercase">
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
      <HStack display={{ sm: 'flex' }} alignItems="center" justify="center">
        <Wrap spacing="20" justify="center" alignItems="center">
          {childrens.map((children) => (
            <WrapItem>{children}</WrapItem>
          ))}
        </Wrap>
      </HStack>
    </Stack>
  );
}
