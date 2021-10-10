import React, { useEffect } from 'react'
import { IconButton, Box, Center, Flex, Heading, Text, Icon, Input, InputGroup, InputRightElement, InputLeftElement, Button, Avatar, Link, Divider, Grid } from "@chakra-ui/react"
import { GiLaptop, GiElectric, GiEasel, GiMechanicGarage, GiAtom, GiAnatomy, GiChart, GiConsoleController, GiSuitcase } from "react-icons/gi";
import { BiCheckCircle, BiSearchAlt, BiChevronRight, BiUpload, BiArrowBack, BiEdit, BiBookmark } from "react-icons/bi";
import { BsFillBookmarkFill, BsFilter, BsBell, BsFillPenFill } from "react-icons/bs";
import { AiOutlineFilePdf, AiOutlineFolderOpen } from "react-icons/ai";
import { GoMail, GoLinkExternal } from "react-icons/go";
import { FiThumbsUp } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";
import classes from '../styles/Navbar.module.css'
import { useHistory } from 'react-router';
import {
    Tag,
    TagLabel,
    TagLeftIcon,
    TagRightIcon,
    TagCloseButton,
} from "@chakra-ui/react"
import BarChart from './BarChart';

export default function Profile() {

    let history = useHistory()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Box p={4}>
            <Flex mb={4} justifyContent="space-between">
                <IconButton icon={<Icon as={BiArrowBack} />} variant="outline" onClick={() => history.go(-1)} />
                <Box>
                    <IconButton icon={<Icon as={BiEdit} w={5} h={5} />} variant="outline" mr={2} />
                </Box>
            </Flex>
            <Flex>
                <Avatar size="lg" name="Dan Abrahmov" src="https://bit.ly/dan-abramov" mr={4} />
                <Flex flexDir="column">
                    <Heading fontSize="2xl">Jonathon Joestar</Heading>
                    <Box color="#a1a1a1" width="100%">
                        <Box my={2}>

                            <Flex alignItems="center" mb={1}>
                                <Icon as={IoLocationSharp} w={5} h={5} pt={"2px"} mr={2} />
                                <Text fontSize="sm">California, United States</Text>
                            </Flex>
                            <Flex alignItems="center" mb={1}>
                                <Icon as={GoMail} w={5} h={5} pt={"2px"} mr={2} />
                                <Text fontSize="sm">jojo32@gmail.com</Text>
                            </Flex>
                            <Flex alignItems="center" mb={1}>
                                <Icon as={AiOutlineFilePdf} w={5} h={5} pt={"2px"} mr={2} />
                                <Link fontSize="sm" isExternal>Resume.pdf <Icon as={GoLinkExternal} w={3} h={3} mx="2px" /></Link>
                            </Flex>
                        </Box>

                        <Button bg="#1A75E8" size="sm" isFullWidth leftIcon={<Icon as={BiUpload} color="#fff" w={5} h={5} />} mb={2} color="#fff" isFullWidth>
                            Upload Resume
                        </Button>
                    </Box>
                </Flex>
            </Flex>
            <Divider my={3} />
            <Heading fontSize="3xl" >Your Jobs</Heading>
            <Grid templateColumns="repeat(2, 1fr)" rowGap={2} mt={3}>
                {[{ type: "Saved", count: 10, icon: AiOutlineFolderOpen },
                { type: "Applied", count: 10, icon: GiSuitcase },
                { type: "For You", count: 10, icon: FiThumbsUp },
                { type: "Accepted", count: 10, icon: BsFillPenFill }
                ].map(topic => {
                    return <Flex flexDir="column" justifyContent="space-between" mr={2} p={2} bg="#1A75E8" color="#fff" height="140px" borderRadius="10px" boxShadow="-1px 3px 17px -4px rgba(0,0,0,0.4);" >
                        <Flex justifyContent="space-between" alignItems="center">
                            <Heading fontSize="xl" maxW={"100px"} >{topic.type}</Heading>
                            <Icon as={topic.icon} w={6} h={6} />
                        </Flex>
                        <Flex justifyContent="flex-end" alignItems="flex-end">
                            <Heading maxW={"100px"}>{topic.count}</Heading>
                        </Flex>
                    </Flex>
                })}
            </Grid>
            <Divider my={3} />
            <Heading fontSize="3xl" >Statistics</Heading>
            <BarChart label={"# of Applications"} colorR={26} colorG={117} colorB={232} />
            <BarChart label={"# of Rejections"} colorR={232} colorG={26} colorB={26} />
            <BarChart label={"# of Accepts"} colorR={26} colorG={232} colorB={26} />
            <Divider my={3} />
            <Flex>
            </Flex>
            <br></br>
            <br></br>
        </Box >
    )
}
