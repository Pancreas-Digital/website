import React from 'react';
import { Text, Link} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

type Props = {
  link?: { text: string; url: string };
  text?: string;
};

export default function LinkWithText({ link = { text: '', url: '#' }, text = ''}: Props) {
  return (
    <Text fontSize="20px" pt="2" color="blue.50" textColor="blue.600">
    {text}{' '}
    <Link color='red.700' href={link.url} isExternal>
    {link.text} <ExternalLinkIcon mx='2px' />
  </Link>
</Text>
  );
}
