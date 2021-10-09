import React, { useEffect } from 'react'
import { IconButton, Box, Center, Flex, Heading, Text, Icon, Input, InputGroup, InputRightElement, InputLeftElement, Button, Divider, Avatar } from "@chakra-ui/react"
import { GiLaptop, GiElectric, GiEasel, GiMechanicGarage, GiAtom, GiAnatomy, GiChart, GiSuitcase, GiShare } from "react-icons/gi";
import { BiCheckCircle, BiSearchAlt, BiArrowBack, BiChevronRight } from "react-icons/bi";
import { BsFillBookmarkFill, BsFilter, BsBell, BsFillCheckCircleFill, BsSearch } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { VscCircleFilled } from "react-icons/vsc";
import classes from '../styles/Navbar.module.css'
import { List, ListItem, ListIcon, OrderedList, UnorderedList } from "@chakra-ui/react"
import { useHistory } from 'react-router';

export default function Messages() {

    let history = useHistory()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Box p={4}>
            <InputGroup>
                <InputLeftElement children={<BsSearch color="green.500" />} />
                <Input placeholder="Search by company" bg="#dfdfdf" isFullWidth />
                <InputRightElement children={<BsFilter color="green.500" />} />
            </InputGroup>
            <br />
            {["google", "microsoft", "apple", "facebook", "amazon", "microsoft", "apple", "facebook", "amazon",].map(mail => {
                return <Box bg="white" borderRadius="10px" p={3} mb={2} onClick={() => history.push("/chat")}>
                    <Flex alignItems="center">

                        <Flex mr={1} width="60px" flexDir="column" justifyContent="space-between">
                            <img src={"/companies/" + mail + ".png"} alt={mail} style={{ width: "30px", height: "30px" }} />
                        </Flex>
                        <Flex flexDir="column" width="100%">
                            <Flex justifyContent="space-between" alignItems="flex-start">
                                <Flex justifyContent="space-around" alignItems="center">
                                    <Heading fontSize="md" mb={1} mr={1}>Mark Hamill</Heading>
                                    <Icon w={'0.7em'} h={'0.7em'} color="green" as={BsFillCheckCircleFill} />
                                </Flex>
                                <Heading fontSize="xs" mt={1}>8.15am</Heading>
                            </Flex>
                            <Flex justifyContent="space-between" alignItems="center">
                                <Text maxW="55vw" isTruncated fontSize="sm" mb={1}>Hello! Regarding your job application</Text>
                                <Flex justifyContent="space-around" alignItems="center">
                                    <Center className={classes.noOfMsgs}>
                                        <Heading fontSize={'9px'} mr={'1px'}>1</Heading>
                                    </Center>
                                    <Icon w={5} h={5} as={BiChevronRight} />
                                </Flex>
                            </Flex>

                        </Flex>
                    </Flex>
                </Box>
            })}
            <br></br>
            <br></br>
            <br></br>
        </Box >
    )
}
