import { Box, Flex, Button } from '@chakra-ui/react';
import { useState } from 'react';
import Video from '../components/Video';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

type Props = {
  items?: string[];
};

const VideoCarousel = ({ items = [''] }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      width="full"
      align="center"
      justifyContent="center"
    >
      <Button
        leftIcon={<ChevronLeftIcon />}
        onClick={prevSlide}
        bg="blue.300"
        color="white"
        _hover={{ bg: "blue.600" }}
        _active={{ bg: "blue.600" }}
        m={{ base: 2, md: 4 }}
      >
      </Button>
      <Box
        width={{ base: "full", md: "xl" }}
        boxShadow="lg"
        rounded="md"
        overflow="hidden"
        m={{ base: 2, md: 0 }}
      >
        <Video videoId={items[currentIndex]} />
      </Box>
      <Button
        rightIcon={<ChevronRightIcon />}
        onClick={nextSlide}
        bg="blue.300"
        color="white"
        _hover={{ bg: "blue.600" }}
        _active={{ bg: "blue.600" }}
        m={{ base: 2, md: 4 }}
      >
      </Button>
    </Flex>
  );
};

export default VideoCarousel;