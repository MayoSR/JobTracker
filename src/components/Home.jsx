import React from 'react'
import { IconButton, Box, Center, Flex, Heading, Text, Icon, Input, InputGroup, InputRightElement, InputLeftElement, Button, Avatar } from "@chakra-ui/react"
import { GiLaptop, GiElectric, GiEasel, GiMechanicGarage, GiAtom, GiAnatomy, GiChart, GiConsoleController } from "react-icons/gi";
import { BiCheckCircle, BiSearchAlt, BiChevronRight } from "react-icons/bi";
import { BsFillBookmarkFill, BsFilter, BsBell } from "react-icons/bs";
import classes from '../styles/Navbar.module.css'
import { useHistory } from 'react-router';
import {
    Tag,
    TagLabel,
    TagLeftIcon,
    TagRightIcon,
    TagCloseButton,
} from "@chakra-ui/react"

export default function Home() {

    let history = useHistory()

    return (
        <div>
            <Flex flexDir="column" className={classes.banner} w="100vw" color="white" m={"-16px"} p={4} py={6}>
                <Flex justifyContent="space-between" w={"100%"} alignItems="center">
                    <Flex alignItems="center">
                        <Avatar size="sm" name="Dan Abrahmov" src="https://bit.ly/dan-abramov" mr={3} />
                        <Heading fontSize="lg">Welcome back Jonathon</Heading>
                    </Flex>
                    <IconButton icon={<Icon as={BsBell} color="white" />} variant="outline" />
                </Flex>
                <Flex mt={3}>
                    <InputGroup mr={2}>
                        <InputLeftElement children={<Icon as={BiSearchAlt} />} color="#1A75E8" />
                        <Input placeholder="Search for jobs" isFullWidth variant="outlined" />
                    </InputGroup>
                    <IconButton icon={<Icon as={BsFilter} />} variant="outline" />
                </Flex>

            </Flex>
            <Box mt={8}>
                <Heading my={4} size="md">Top Categories</Heading>
                <Flex flexWrap="nowrap" overflowX="scroll" overflowY="hidden" pb={5}>
                    {
                        [{ icon: GiLaptop, job: "Computer" }, { icon: GiConsoleController, job: "Games" }, { icon: GiEasel, job: "Artist" }, { icon: GiMechanicGarage, job: "Mechanical" }, { icon: GiAtom, job: "Chemistry" }, { icon: GiAnatomy, job: "Doctor" }, { icon: GiChart, job: "Economist" },].map(icon => {
                            return <Box width={"80px"} mr={2} bg="white" borderRadius="10px" boxShadow="-1px 3px 17px -4px rgba(0,0,0,0.17);">
                                <Center flexDir="column" p={2} mr={4} width={"80px"}>
                                    <Icon
                                        w={8}
                                        h={8}
                                        as={icon.icon}
                                        mb={3}
                                        color="#1A75E8"
                                    />
                                    <Text fontSize="xs" align="center">{icon.job}</Text>
                                    <Button size="xs" mt={1} color="#1A75E8">
                                        View Jobs
                                    </Button>
                                </Center>
                            </Box>
                        })
                    }
                </Flex>
            </Box>
            <Box>
                <Heading my={4} size="md">Top Companies</Heading>
                <Flex flexWrap="nowrap" overflowX="scroll" overflowY="hidden" pb={5}>
                    {
                        ["google", "microsoft", "apple", "netflix", "spotify", "facebook", "amazon", "spotify", "ferrari"].map(icon => {
                            return <Box width={"60px"} mr={2} py={4} bg="white" borderRadius="10px" boxShadow="-1px 3px 17px -4px rgba(0,0,0,0.17);">
                                <Center flexDir="column" width={"60px"}>
                                    <img src={"/companies/" + icon + ".png"} alt={icon} className={classes.imgStyles} />
                                </Center>
                            </Box>
                        })
                    }
                </Flex>
            </Box>
            <Box>
                <Heading my={4} size="md">Recommended for you</Heading>
                <Flex flexDir="column">
                    {
                        ["google", "microsoft", "apple", "netflix", "facebook", "amazon", "ferrari",].map(icon => {
                            return <Flex justifyContent="space-between" width="100%" bg="white" mb={4} p={3} borderRadius="10px" onClick={() => history.push("/job")} boxShadow="-1px 3px 17px -4px rgba(0,0,0,0.17);">
                                <Center width="150px" mr={3}>
                                    <img src={"/companies/" + icon + ".png"} alt={icon} className={classes.imgStyles} />
                                </Center>
                                <Flex flexDir="column">
                                    <Heading fontSize="md">Senior UX developer</Heading>
                                    <Flex flexDir="column" >
                                        <Text fontSize="xs" height="40px" overflow="hidden" textOverflow="ellipsis">
                                            As a UX Engineer, you'll work on the front end of our products in a challenging, fast-paced environment, helping to bridge UX best practices and production execution
                                        </Text>
                                        <Flex mt={3} width="100%">
                                            {["California", "$110k - $120k", "1 hour ago"].map(data => {
                                                return <Tag size="sm" variant="solid" background="rgba(26, 117, 232,0.2)" color="#1a75e8" fontSize="10px" mr={1}>
                                                    {data}
                                                </Tag>
                                            })}
                                        </Flex>
                                    </Flex>
                                </Flex>
                                <Flex>
                                    <Icon w={7} h={7} as={BiChevronRight} />
                                </Flex>
                            </Flex>

                        })
                    }
                </Flex>
            </Box>
            <br></br>
            <br></br>
        </div >
    )
}
