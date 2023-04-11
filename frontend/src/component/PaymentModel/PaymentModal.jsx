import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Text,
    Box,
    Input,
    Flex,
} from '@chakra-ui/react'
import CancelButton from './CancelButton'


function Paymentmodal({ total }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const hadleclick = () => {

    }
    return (
        <>
            <Button bg={"rgb(213,162,73)"} width="100%" padding={"4px"} margin="4px" color="white" onClick={onOpen}>Proceed To Ship</Button>

            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader fontFamily={"Lora"} color={"teal"}>Order Total Rs-/{total}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Box fontWeight='bold' mb='1rem'>

                            <Box width={"400px"} margin="auto" >
                                <Text>ENTER DELIVERY ADDRESS </Text>
                                <hr />

                                {/* <Text> EMAIL </Text> */}
                                <Input padding={"4px"} margin="4px" id="email" type="email" placeholder="EMAIL" />

                                {/* <Text>FIRST NAME</Text> */}
                                <Input padding={"4px"} margin="4px" id="fname" type="text" placeholder="FIRST NAME" />

                                {/* <Text> LAST NAME </Text> */}
                                <Input padding={"4px"} margin="4px" id="lname" type="text" placeholder="LAST NAME" />

                                {/* <Text>STREET ADDRESS </Text> */}
                                <Input padding={"4px"} margin="4px" type="text" placeholder="STREET ADDRESS" />

                                {/* <Text> CITY</Text> */}
                                <Input padding={"4px"} margin="4px" type="text" placeholder="CITY" />

                                {/* <Text>STATE/PROVINCE</Text> */}
                                <Input padding={"4px"} margin="4px" type="text" placeholder="STATE/PROVINCE" />

                                {/* <Text>ZIP/POSTAL CODE</Text> */}
                                <Input padding={"4px"} margin="4px" type="text" placeholder="ZIP/POSTAL CODE" />
                                {/* <Text>PHONE NO</Text> */}
                                <Input padding={"4px"} margin="4px" id="lname" type="tel" placeholder="PHONE NO" />

                                <Text> ORDER SUMMARY</Text>
                                <hr />




                            </Box>
                            <Box>
                                <CancelButton />
                            </Box>
                        </Box>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Cancel Payment
                        </Button>
                        {/* <Button variant='ghost'>Add Some Items</Button> */}
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
export default Paymentmodal