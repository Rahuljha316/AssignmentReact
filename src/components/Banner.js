import { Flex,Stack, Heading } from "@chakra-ui/react";
let BannerImg = require('../assets/zyn.png')

const Banner = () =>{
    return(
        <div className="banner">
            <Flex flex='1' direction={"column"}>
               
    <Stack spacing={6} align={"flex-start"}>
           
            <Heading as='h2' size='4xl' noOfLines={1} fontWeight={"bold"}>
            WordPress Development Services
            </Heading>
            <Heading as='h3' size='md'>
            GROW YOUR BRAND WITH ZYNTECH TODAY
            </Heading>
            <Heading as='h5' size='md'>
            Have a question, Not sure where to start?
            </Heading>
            <button className="planButton">pick a plan</button>
            
            </Stack>
            </Flex>
            <Flex flex='1'>
                <img className="banner-image" alt="banner-image" src={BannerImg} />
            </Flex>

        </div>
    )
}

export default Banner;