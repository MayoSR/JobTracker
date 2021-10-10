import React, { useEffect } from 'react'
import { IconButton, Box, Center, Flex, Heading, Text, Icon, Input, InputGroup, InputRightElement, InputLeftElement, Button, Divider, Avatar, AvatarBadge } from "@chakra-ui/react"
import { GiLaptop, GiElectric, GiEasel, GiMechanicGarage, GiAtom, GiAnatomy, GiChart, GiSuitcase, GiShare } from "react-icons/gi";
import { BiCheckCircle, BiSearchAlt, BiArrowBack, BiChevronRight, BiCheckDouble } from "react-icons/bi";
import { BsFillBookmarkFill, BsFilter, BsBell, BsFillCheckCircleFill, BsDot } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { AiOutlineSend, AiOutlineMore } from "react-icons/ai";
import { FiMoreVertical } from "react-icons/fi";
import { VscCircleFilled } from "react-icons/vsc";
import classes from '../styles/Navbar.module.css'
import { List, ListItem, ListIcon, OrderedList, UnorderedList } from "@chakra-ui/react"
import { useHistory } from 'react-router';

export default function ChatScreen() {

    let history = useHistory()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Box p={4}>
            <Flex mb={4} justifyContent="space-between">
                <Flex alignItems="center">
                    <IconButton icon={<Icon as={BiArrowBack} />} variant="outline" onClick={() => history.go(-1)} mr={2} />
                    <Center>
                        <Avatar size="sm" name="Dan Abrahmov" src="https://bit.ly/dan-abramov" mr={3} ><AvatarBadge boxSize="0.95em" bg="green.500" /> </Avatar>
                        <Flex flexDir="column">
                            <Flex alignItems="center">
                                <Heading fontSize="lg" mr={2}>Reed Richards</Heading>
                                <Icon w={'0.7em'} h={'0.7em'} mt={1} color="green" as={BsFillCheckCircleFill} />
                            </Flex>
                            <Text color="grey" fontSize="xs">Sr. UX Developer at Google</Text>
                        </Flex>

                    </Center>

                </Flex>
                <IconButton
                    aria-label="Search database"
                    icon={<Icon as={FiMoreVertical} w={6} h={6} />}
                    variant="outline"
                />
            </Flex>
            <Divider />
            <Flex flexDir="column" flexWrap="nowrap" mt={8}>
                {["Regarding your application at Google", "Your interview is at 9.30am",].map(mail => {
                    return <Flex borderRadius="10px" p={3} mb={2} bg="#1A75E8" color="#fff" display="inline-block" maxW="50vw" minW="30vw">
                        <Text fontSize="xs">{mail}</Text>
                        <Divider mt={2} />
                        <Flex justifyContent="space-between" alignItems="center">
                            <Heading fontSize="xs" mt={1}>8.15am</Heading>
                            <Icon color="cyan" as={BiCheckDouble} w={4} h={4} mx={1} />
                        </Flex>
                    </Flex>
                })}
                {["Okay sure will be there by 9.00am", "Thank you", "Anything I should bring?"].map(mail => {
                    return <Flex width="100%" justifyContent="flex-end">
                        <Flex borderRadius="10px" p={3} mb={2} bg="white" color="#000" display="inline-block" maxW="50vw" minW="30vw">
                            <Text fontSize="xs">{mail}</Text>
                            <Divider mt={2} />
                            <Flex justifyContent="space-between" alignItems="center">
                                <Heading fontSize="xs" mt={1}>8.15am</Heading>
                                <Icon color="#1A75E8" as={BiCheckDouble} w={4} h={4} mx={1} mt={2} />
                            </Flex>
                        </Flex>
                    </Flex>
                })}
                <Box className={classes.typingPill} bg="#dfdfdf" width="140px" height="30px" borderRadius="20px" mt={4}>
                    <Flex alignItems="center" position="relative">
                        <Text fontSize="xs" position="absolute" className={classes.typeText}>Reed is typing</Text>
                        <Heading fontSize="sm" ml={2} className={classes.typingAnim_1} position="absolute">.</Heading>
                        <Heading fontSize="sm" ml={2} className={classes.typingAnim_2} position="absolute">..</Heading>
                        <Heading fontSize="sm" ml={2} className={classes.typingAnim_3} position="absolute">...</Heading>
                    </Flex>
                </Box>
                <Flex position="fixed" style={{ bottom: "59px", left: 0, right: 0, zIndex: 1300 }} p={3} bg="#f5f5f5">
                    <Input variant="filled" placeholder="Enter your message here" mr={3} bg="#dfdfdf" />
                    <IconButton
                        aria-label="Search database"
                        icon={<AiOutlineSend color="#fff" />}
                        bg="#1A75E8"
                    />
                </Flex>
            </Flex>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </Box >
    )
}
