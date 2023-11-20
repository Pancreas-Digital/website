import {
  Heading,
  Box,
  Center,
  useColorModeValue,
} from '@chakra-ui/react';
import YoutubeVideo from './YoutubeVideo';
type VideoItem = {
  videoId: string;
};
type Props = {
  video: VideoItem;
  name?: string;
};

export default function Video({
  video = {videoId:''},
  name = '',
}: Props) {
  return (
    <Center py={2}>
      <Box
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={2}
        textAlign={'center'}
      >
        <YoutubeVideo videoId={video.videoId}/>
        <Heading fontSize={'2xl'} fontFamily={'body'} color="blue.600">
          {name}
        </Heading>
      </Box>
    </Center>
  );
}
