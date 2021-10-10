import React, { useEffect } from 'react'
import { IconButton, Box, Center, Flex, Heading, Text, Icon, Input, InputGroup, InputRightElement, InputLeftElement, Button, Avatar } from "@chakra-ui/react"
import { GiLaptop, GiElectric, GiEasel, GiMechanicGarage, GiAtom, GiAnatomy, GiChart, GiSuitcase, GiShare } from "react-icons/gi";
import { BiCheckCircle, BiSearchAlt, BiArrowBack, BiChevronRight } from "react-icons/bi";
import { BsFillBookmarkFill, BsFilter, BsBell, BsFillCheckCircleFill, BsLink45Deg } from "react-icons/bs";
import { GrGroup } from "react-icons/gr";
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
import { Tabs, TabList, TabPanels, Tab, TabPanel, Divider } from "@chakra-ui/react"
import BarChart from './BarChart';

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
                            <Tab>Listings</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <Flex justifyContent="space-between" flexWrap="wrap">
                                    {[{ key: "Website", value: "www.google.com", icon: BsLink45Deg, color: "#1A75E8" }, { key: "Employees", value: "66,000+", icon: GrGroup }, { key: "Reviews", value: "109,000+", icon: AiFillStar },].map((detail, ind) => {
                                        return <Box mb={4}>
                                            <Flex flexDir="column">
                                                <Heading fontSize="lg" mb={1}>{detail.key}</Heading>
                                                {ind % 2 ? <Text fontSize="sm" textAlign="center" >{detail.value} </Text> : <Text color={detail.color} fontSize="sm" >{detail.value} </Text>}
                                            </Flex>
                                        </Box>
                                    })}
                                </Flex>
                                <Box mb={4}>
                                    <Flex flexDir="column">
                                        <Flex alignItems="center">
                                            {/* <Icon as={IoLocationSharp} w={5} h={5} mr={1} /> */}
                                            <Heading fontSize="lg">Location</Heading>
                                        </Flex>
                                        <Text fontSize="sm"  >Mountain View, CA, United States </Text>
                                    </Flex>
                                </Box>
                                <BarChart label={"# of Applications"} colorR={26} colorG={117} colorB={232} />
                                <Box mt={3}>

                                    <img src="/googlemap.png" alt="google_map" width="100%" />
                                </Box>

                            </TabPanel>
                            <TabPanel p={0}>

                                {[1, 2, 3, 4, 5, 6].map(review => {
                                    return <Box>
                                        <Flex alignItems="flex-start" px={4} py={2}>
                                            <Avatar size="md" name="Dan Abrahmov" src="https://bit.ly/dan-abramov" mr={2} />
                                            <Flex flexDir="column">
                                                <Flex justifyContent="space-between" mb={1}>
                                                    <Center>

                                                        <Heading fontSize="sm" mr={1}>Mark Hamill</Heading>
                                                        <Icon w={'0.6em'} h={'0.6em'} color="green" as={BsFillCheckCircleFill} />
                                                    </Center>
                                                    <Flex>
                                                        {[1, 2, 3, 4, 5].map((star) => {
                                                            return <Icon as={AiFillStar} w={4} h={4} color={"#FFD700"} />
                                                        })}
                                                    </Flex>
                                                </Flex>
                                                <Text fontSize="sm">
                                                    Great Company! Had a really good time working there. Thanks for all the great work and my great Manager!
                                                </Text>
                                            </Flex>
                                        </Flex>
                                        <Divider />
                                    </Box>
                                })}
                            </TabPanel>
                            <TabPanel>

                                {["google", "google", "google", "google", "google", "google", "google", "google", "google",].map(icon => {
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
