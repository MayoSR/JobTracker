import React, { useEffect } from 'react'
import { IconButton, Box, Center, Flex, Heading, Text, Icon, Input, InputGroup, InputRightElement, InputLeftElement, Button, Avatar } from "@chakra-ui/react"
import { GiLaptop, GiElectric, GiEasel, GiMechanicGarage, GiAtom, GiAnatomy, GiChart, GiSuitcase, GiShare } from "react-icons/gi";
import { BiCheckCircle, BiSearchAlt, BiArrowBack } from "react-icons/bi";
import { BsFillBookmarkFill, BsFilter, BsBell } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import { VscCircleFilled } from "react-icons/vsc";
import classes from '../styles/Navbar.module.css'
import { useHistory } from 'react-router';
import {
    Tag,
    TagLabel,
    TagLeftIcon,
    TagRightIcon,
    TagCloseButton,
} from "@chakra-ui/react"
import { Grid, GridItem } from "@chakra-ui/react"
import { Progress } from "@chakra-ui/react"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"

export default function CompanyDetails() {

    let history = useHistory()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div id="company-page">
            <Flex mb={4} justifyContent="space-between" p={4}>
                <IconButton icon={<Icon as={BiArrowBack} />} variant="outline" onClick={() => history.go(-1)} />
                <Box>
                    <IconButton icon={<Icon as={GiShare} />} variant="outline" mr={2} />
                    <IconButton icon={<Icon as={BsFillBookmarkFill} />} variant="outline" />
                </Box>
            </Flex>
            <Center height="100px">

                <Box bg="transparent">
                    <img src={"/companies/google.png"} alt={"google"} style={{ width: "60px", height: "60px", }} />
                </Box>
            </Center>
            <Box bg="#fff" pt={4} minH={"100vh"} mt={6} borderTopRadius="40px">
                <Box px={6}>

                    <Heading fontSize="4xl" mb={1}>Google LLC</Heading>
                    {[1, 2, 3, 4, 5].map((star) => {
                        return <Icon as={AiFillStar} w={6} h={6} color={"#FFD700"} />
                    })}
                </Box>
                <Box>

                    <Tabs variant="enclosed" isFitted mt={3}>
                        <TabList mb="1em">
                            <Tab>Overview</Tab>
                            <Tab>Reviews</Tab>
                            <Tab>Photos</Tab>
                            <Tab>Listings</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>


                                <Flex justifyContent="space-between" mt={4} alignItems="center">
                                    <Heading fontSize="lg">Website : </Heading>
                                    <Heading fontSize="md" color="#1A75E8">www.google.com </Heading>
                                </Flex>
                                <Flex justifyContent="space-between" mt={4} alignItems="center">
                                    <Heading fontSize="lg">Employees </Heading>
                                    <Heading fontSize="md" color="#1A75E8">66,000+ </Heading>
                                </Flex>
                                <Flex justifyContent="space-between" mt={4} alignItems="center">
                                    <Heading fontSize="lg">Location : </Heading>
                                    <Heading align="right" maxW={"200px"} fontSize="md" color="#1A75E8">Mountain View, CA, United States </Heading>
                                </Flex>
                                <Flex justifyContent="space-between" mt={4} alignItems="center">
                                    <Heading fontSize="lg">Reviews : </Heading>
                                    <Heading fontSize="md" color="#1A75E8">109,000+ </Heading>
                                </Flex>


                            </TabPanel>
                            <TabPanel>
                                <p>two!</p>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>
            </Box>
            <br></br>
            <br></br>
        </div >
    )
}
