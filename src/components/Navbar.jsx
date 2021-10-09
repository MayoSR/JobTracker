import React, { useState } from 'react'
import classes from "../styles/Navbar.module.css"
import { Box, InputGroup, InputLeftElement, Input, InputRightElement, Icon, Flex, Text, IconButton, Heading, Avatar, Center } from "@chakra-ui/react"
import { BiHomeAlt, BiFoodMenu, BiTimeFive, BiBookHeart, } from "react-icons/bi";
import { BsFillEnvelopeOpenFill } from "react-icons/bs";
import { useHistory } from "react-router-dom";

export default function Navbar() {

    let history = useHistory();
    const [currentTab, changeCurrentTab] = useState("home")

    function changeRoute(route) {
        changeCurrentTab(route)
        history.push("/" + route);
    }

    return (
        <Flex className={classes.navbar} width={"100vw"} justifyContent="space-evenly" alignItems="center">
            <Box mt={1}>
                <Flex alignItems="center" flexDirection="column" className={currentTab === "home" ? classes.activeButton : classes.inactive}>
                    <IconButton
                        variant="link"
                        aria-label="Call Sage"
                        icon={<Icon w={6} h={6} as={BiHomeAlt} />}
                        onClick={() => changeRoute("home")}
                        className={currentTab === "home" ? classes.activeButton : classes.inactive}
                    />
                    <Text className={classes.buttonText} fontSize="xs">Home</Text>
                </Flex>
            </Box>
            <Box mt={1}>
                <Flex alignItems="center" flexDirection="column" className={currentTab === "messages" ? classes.activeButton : classes.inactive}>
                    <Box position="relative">
                        <IconButton
                            variant="link"
                            aria-label="Call Sage"
                            icon={<Icon w={6} h={6} as={BsFillEnvelopeOpenFill} />}
                            onClick={() => changeRoute("messages")}
                            className={currentTab === "messages" ? classes.activeButton : classes.inactive}
                        />
                        <Center className={classes.noOfMessages}>

                            <Heading fontSize={'9px'} >10</Heading>
                        </Center>
                    </Box>
                    <Text className={classes.buttonText} fontSize="xs">Messages</Text>
                </Flex>
            </Box>

        </Flex>
    )
}
