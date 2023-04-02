import { Box, Button, Input, Text } from '@chakra-ui/react';
import React from 'react'
// import styles from  "./payment.css"
// import './PaymentPage.css';

// import styles from "./payment.module.css";

const PaymentsPage = () => {
    const hadleclick = () => {

    }
    return (
        <Box width={"400px"} margin="auto" >
            <Text>ENTER DELIVERY ADDRESS </Text>
            <hr />
          
                {/* <Text> EMAIL </Text> */}
                <Input id="email" type="email" placeholder="EMAIL" />

                {/* <Text>FIRST NAME</Text> */}
                <Input id="fname" type="text" placeholder="FIRST NAME" />

                {/* <Text> LAST NAME </Text> */}
                <Input id="lname" type="text" placeholder="LAST NAME" />

                {/* <Text>STREET ADDRESS </Text> */}
                <Input type="text" placeholder="STREET ADDRESS" />

                {/* <Text> CITY</Text> */}
                <Input type="text" placeholder="CITY" />

                {/* <Text>STATE/PROVINCE</Text> */}
                <Input type="text" placeholder="STATE/PROVINCE" />

                {/* <Text>ZIP/POSTAL CODE</Text> */}
                <Input type="text" placeholder="ZIP/POSTAL CODE" />
                {/* <Text>PHONE NO</Text> */}
                <Input id="lname" type="tel" placeholder="PHONE NO" />

                <Text> ORDER SUMMARY</Text>
                <hr />


                <Box>
                    <Button width={"400px"} onClick={hadleclick}> PROCEDE TO PAYMENT </Button>

                </Box>
                {/* </form> */}

            </Box>
            )
}

            export default PaymentsPage