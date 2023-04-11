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
  Input,
  Flex,
  Image,
} from '@chakra-ui/react'
import React from 'react'
import PaymentSuccess from '../PaymentModel/PaymentSuccess'
function CancelButton() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()

  return (
    <>
      {/* <Button colorScheme='red' onClick={onOpen}> */}
      {/* Delete  */}
      <Button width={"400px"} onClick={onOpen}> PROCEDE TO PAYMENT </Button>
      {/*  */}
      {/* </Button> */}

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              CHOOSE PAYMENT MODE

            </AlertDialogHeader>

            <AlertDialogBody>
              {/* Are you sure? You can't undo this action afterwards. */}
              <Box width={"400px"} margin="auto" >
                <hr />
                <Box gap={"10px"} padding={"10px"}>

          
                  <Image padding={"10px"} src="https://images.forestessentialsindia.com/pub/media/payment-method-new.png" />
                  <Input padding={"10px"} margin="5px" id="email" type="email" placeholder="ENTER CARD NUMBER" />
                  <Flex gap={"10px"} justifyContent={"space-between"}>
                    <Flex gap={"10px"} width="60%">
                      <Input margin="5px"id="fname" type="text" placeholder="MONTH" />
                      <Input margin="5px"id="lname" type="text" placeholder="YEAR" />
                    </Flex>
                    <Input margin="5px"width={"30%"} type="text" placeholder="CVV" />
                  </Flex>
                  <Button> PAY</Button>
                </Box>
                <hr />
                <Box gap={"10px"} padding={"10px"}>

                
                  <Image margin="5px"width="100px" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn6Y5DVqqrbBoi4HnB-G5YLf9TJHsMqKj-Pg&usqp=CAU' />
                  <Input margin="5px"type="text" placeholder="ENTER UPI ID" />
                  <Input margin="5px"type="text" placeholder="ENTER OTP" />
                  <Button margin="5px">GET OTP</Button>
                </Box>
                <hr />
                <Box padding={"10px"}>
                  <Flex>
                    <Box >
                      <Image width={"100px"} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREMBSfieF5Sj3l5-RfsdrJRu2XQ697O-KAVA&usqp=CAU' />
                    </Box>
                    <Box>
                      <Image width={"150px"} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMTsr0-y_t3TSDPqhujuAoha6FArg25-an8g&usqp=CAU' />
                    </Box>
                    <Box>
                      <Image width={"100px"} src='https://www.logo.wine/a/logo/PhonePe/PhonePe-Logo.wine.svg' />
                    </Box>
                  </Flex>
                </Box>
                <hr />
              </Box>
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button  ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
             <PaymentSuccess/>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}
export default CancelButton