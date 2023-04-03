import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Flex,
  Image,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel({data}) {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
 

  return (
    <Box
      position={'relative'}
      height={'400px'}
      width={'full'}
      // border="2px solid red"
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {data.map((card, index) => (
          <Box
            key={index}
            // border="2px solid black"
            margin='10px 10px'
            height={'300px'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}>
            {/* This is the block you need to change, to customize the caption */}
            <Container height="300px" position="relative">
              <Stack
             
                spacing={6}
                // w={'full'}
                // maxW={'lg'}
                width="90%"
               
                margin='0px 40px'
                position="absolute"
                top="50%"
                transform="translate(0, -50%)">
                  <Flex justifyContent={"space-around"}> 
                    <Box> <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                  {card.brand}
                </Heading>
                <Text fontSize={{ base: 's', lg: 'md' }} color="GrayText">
                  {card.nameCls}
                </Text>
                <Text  fontSize={{ base: 's', lg: 'md' }} color="rgb(177, 153, 117)">
                  RS-{card.price}
                </Text>
                </Box>
                    <Box>
                      <Image width={"250px"} src={card.src}/>
                    </Box>
                  </Flex>
               
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}