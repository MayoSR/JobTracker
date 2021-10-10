import React, { useEffect } from 'react'
import { IconButton, Box, Center, Flex, Heading, Text, Icon, Input, InputGroup, InputRightElement, InputLeftElement, Button, Avatar } from "@chakra-ui/react"
import { GiLaptop, GiElectric, GiEasel, GiMechanicGarage, GiAtom, GiAnatomy, GiChart, GiSuitcase, GiShare } from "react-icons/gi";
import { BiCheckCircle, BiSearchAlt, BiArrowBack } from "react-icons/bi";
import { BsFillBookmarkFill, BsFilter, BsBell } from "react-icons/bs";
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

export default function CategoryJobs() {

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
            <Flex alignItems="center" my={6}>
                <Heading fontSize="lg">Looking for jobs in : </Heading>
                <Heading fontSize="xl" ml={1} color="#1A75E8">Computers</Heading>
            </Flex>
            <Grid templateColumns="repeat(2, 1fr)" gap={3} mt={3}>
                {["google", "microsoft", "apple", "facebook", "amazon", "microsoft", "apple", "facebook", "amazon",].map(card => {
                    return <Box boxShadow="1px 3px 5px 1px rgba(0,0,0,0.2);" p={3} borderRadius="10px">
                        <Flex alignItems="center" justifyContent="space-between">
                            <img src={"/companies/" + card + ".png"} alt={card} style={{ width: "30px", height: "30px" }} />
                            <Heading fontSize="md" pl={2}>Sr. UX Developer</Heading>
                        </Flex>
                        <Grid templateColumns="repeat(2, 1fr)" mt={3} width="100%" gap={1}>
                            {["California", "$90k-$110k", "1 hour ago", "87 applied"].map(data => {
                                return <Tag size="sm" variant="solid" background="rgba(26, 117, 232,0.2)" color="#1a75e8" fontSize="10px" mr={1}>
                                    {data}
                                </Tag>
                            })}
                        </Grid>
                        <Button isFullWidth bg="#1a75e8" size="xs" color="white" mt={2}>Apply</Button>
                    </Box>
                })}
            </Grid>
            <br></br>
            <br></br>
        </Box >
    )
}
