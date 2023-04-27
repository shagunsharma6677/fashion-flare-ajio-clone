import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
} from '@chakra-ui/react';




const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
    
      bg={useColorModeValue("#2c4152")}
      color={useColorModeValue('#fff')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 1, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>Fashion Flair</ListHeader>
            <Link href={'#'}>Who are we</Link>
            <Stack direction={'row'} align={'center'} spacing={2}>
              <Link href={'#'}>Join our Team</Link>
              <Tag
                size={'sm'}
                bg={useColorModeValue('green.300', 'green.800')}
                ml={2}
                color={'white'}>
                New
              </Tag>
            </Stack>
            <Link href={'#'}>Terms and Conditions</Link>
            <Link href={'#'}>Fee & Payments</Link>
            <Link href={'#'}>Returns and Refund Policy</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Help</ListHeader>
            <Link href={'#'}>Track Your Order</Link>
            <Link href={'#'}>Frequently Asked Questions</Link>
            <Link href={'#'}>Returns</Link>
            <Link href={'#'}>Cancellation</Link>
            <Link href={'#'}>Customer Care</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Shop By</ListHeader>
            <Link href={'/mens'}>Men</Link>
            <Link href={'/womens'}>Women</Link>
            <Link href={'/kids'}>Kids</Link>
            <Link href={'#'}>Stores</Link>
            <Link href={'#'}>New Arivals</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Follow Us</ListHeader>
            <Link href={'#'}>Facebook</Link>
            <Link href={'#'}>Twitter</Link>
            <Link href={'#'}>Dribbble</Link>
            <Link href={'#'}>Instagram</Link>
            <Link href={'#'}>LinkedIn</Link>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Flex
          align={'center'}
          _before={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            ml: 8,
          }}>
              <Text fontSize="30px" fontWeight={"600"}>Fashion Flair</Text>
        </Flex>
      </Box>
    </Box>
  );
}