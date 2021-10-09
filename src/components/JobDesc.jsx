import React, { useEffect } from 'react'
import { IconButton, Box, Center, Flex, Heading, Text, Icon, Input, InputGroup, InputRightElement, InputLeftElement, Button, Divider } from "@chakra-ui/react"
import { GiLaptop, GiElectric, GiEasel, GiMechanicGarage, GiAtom, GiAnatomy, GiChart, GiSuitcase, GiShare } from "react-icons/gi";
import { BiCheckCircle, BiSearchAlt, BiArrowBack } from "react-icons/bi";
import { BsFillBookmarkFill, BsFilter, BsBell } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { VscCircleFilled } from "react-icons/vsc";
import classes from '../styles/Navbar.module.css'
import { List, ListItem, ListIcon, OrderedList, UnorderedList } from "@chakra-ui/react"
import { useHistory } from 'react-router';

export default function JobDesc() {

    let history = useHistory()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Box p={4}>
            <Flex mb={4} justifyContent="space-between">
                <IconButton icon={<Icon as={BiArrowBack} />} variant="outline" onClick={() => history.go(-1)} />
                <Box>
                    <IconButton icon={<Icon as={GiShare} />} variant="outline" mr={2} />
                    <IconButton icon={<Icon as={BsFillBookmarkFill} />} variant="outline" />
                </Box>
            </Flex>

            <Box bg="white" p={4}>
                <Flex alignItems="center">

                    <Flex mr={5} width="60px" flexDir="column" justifyContent="space-between">

                        <img src={"/companies/google.png"} alt={"google"} className={classes.largeLogo} />
                    </Flex>
                    <Flex flexDir="column">
                        <Heading fontSize="2xl" mb={1}>Senior User Experience Designer</Heading>
                        <Box color="grey">
                            <Flex alignItems="center" my={1}>
                                <Heading fontSize="xs">Google</Heading>
                                <Icon as={VscCircleFilled} w={2} h={2} mx={1} />
                                <Icon as={IoLocationSharp} w={4} h={4} />
                                <Heading fontSize="xs">California, United States</Heading>
                            </Flex>
                            <Flex alignItems="center">
                                <Icon as={GiSuitcase} w={5} h={5} mt={"1px"} />
                                <Heading fontSize="xs">Full Time</Heading>
                                <Icon as={VscCircleFilled} w={2} h={2} mx={1} />
                                <Heading color="#1a75e8" fontSize="xs">1 hour ago</Heading>
                            </Flex>
                            <Flex alignItems="center" mt={1}>
                                <Heading fontSize="xs">Posted by : John</Heading>
                                <Icon as={VscCircleFilled} w={2} h={2} mx={1} />
                                <Heading fontSize="xs">Team Leader</Heading>
                            </Flex>
                        </Box>
                    </Flex>
                </Flex>
                <Flex mt={3}>
                    <Button isFullWidth bg="#1a75e8" color="white">Apply</Button>
                </Flex>
            </Box >
            <Divider my={3} bg="grey" />
            <Box>
                <Box mt={4} bg="white" p={4}>
                    <Heading fontSize="xl" mb={2}>Job Description</Heading>
                    <Text fontSize="sm">
                        UX Engineers are the synthesis of design and development. They take Google's most innovative product concepts and bring them to life in an effort to push the boundaries of user interface design. Google is known for its design aesthetic and technical know-how. In a UX Engineer job, you'll need both types of skills to develop the next generation of products. You'll partner with Researchers and Designers to define and deliver new features, test new concepts and assist with final implementation. Details are critical as you iterate on complex interactions, animations and pixel-perfect visual designs.
                    </Text>
                    <br />
                    <Text fontSize="sm">As a UX Engineer, you will be directly responsible for helping the evolution of enterprise design systems at Google. You will engineer solutions that create shareable web components to be used in enterprise products within the organization. You’ll support multiple different product areas and collaborate with multiple job functions across the globe. </Text>


                </Box>
                <Divider my={3} bg="grey" />
                <Box bg="white" p={4}>
                    <Heading fontSize="xl" mb={2}>Responsibilities</Heading>
                    <UnorderedList>
                        <ListItem><Text fontSize="sm">Gain a deep understanding of all the Google Cloud Platform (GCP) products, technologies, user motivations, market opportunities, and competition.</Text></ListItem>
                        <ListItem><Text fontSize="sm">Work with Google Cloud UX leadership, Product Management, Engineering, and others to create a design vision that solves problems across a broad spectrum of users/businesses.</Text></ListItem>
                        <ListItem><Text fontSize="sm">Create storyboards, wireframes, and high-fidelity designs to guide design and development.</Text></ListItem>
                        <ListItem><Text fontSize="sm">Iterate on designs based on user feedback, tech constraints, and more, and drive UX process across a broad set of stakeholders.</Text></ListItem>
                        <ListItem><Text fontSize="sm">Guide product design decisions and outcomes to implement experiences, adhering to Google’s product excellence principles.</Text></ListItem>
                    </UnorderedList>
                </Box>
                <Divider my={3} bg="grey" />
                <Box bg="white" p={4}>
                    <Heading fontSize="xl" mb={2}>Perks</Heading>
                    <UnorderedList>
                        <ListItem><Text fontSize="sm">Gain a deep understanding of all the Google Cloud Platform (GCP) products, technologies, user motivations, market opportunities, and competition.</Text></ListItem>
                        <ListItem><Text fontSize="sm">Work with Google Cloud UX leadership, Product Management, Engineering, and others to create a design vision that solves problems across a broad spectrum of users/businesses.</Text></ListItem>
                        <ListItem><Text fontSize="sm">Create storyboards, wireframes, and high-fidelity designs to guide design and development.</Text></ListItem>
                        <ListItem><Text fontSize="sm">Iterate on designs based on user feedback, tech constraints, and more, and drive UX process across a broad set of stakeholders.</Text></ListItem>
                        <ListItem><Text fontSize="sm">Guide product design decisions and outcomes to implement experiences, adhering to Google’s product excellence principles.</Text></ListItem>
                    </UnorderedList>
                </Box>

            </Box>
            <br></br>
            <br></br>
            <br></br>
        </Box >
    )
}
