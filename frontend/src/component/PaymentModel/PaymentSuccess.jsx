import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
    useDisclosure,
    Box,
    Text,
    Input,
    Flex,
    Image,
  } from '@chakra-ui/react'
  import React from 'react'
//   import {useNavigate} from ""
import { useNavigate } from 'react-router-dom'
  function PaymentSuccess() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
 const navigate =useNavigate()
    return (
      <>
        {/* <Button colorScheme='red' onClick={onOpen}> */}
        {/* Delete  */}
        <Button colorScheme={"red"} onClick={onOpen}> PROCEED TO PAYMENT </Button>
        {/*  */}
        {/* </Button> */}
  
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
             
  
              <AlertDialogBody>
              <Box alignItems={"center"}>
                <Image src='https://tse2.mm.bing.net/th?id=OIP.5F1nnsuC54nM7Z0XXjN9owHaG2&pid=Api&P=0&w=173&h=161'/>
                <Text colorScheme={"rgb(48,146,1)"} fontWeight="700">PAYMENT SUCCESS</Text>
              </Box>
              </AlertDialogBody>
  
              <AlertDialogFooter>
                <Button onClick={()=>navigate("/")}>CONTINUE SHOPPING</Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    )
  }
  export default PaymentSuccess