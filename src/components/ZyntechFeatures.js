import { Flex,Heading } from "@chakra-ui/react";
let feature1 = require('../assets/Feature1.PNG')
let feature2 = require('../assets/feature2.PNG')
let feature3 = require('../assets/feature3.PNG')
const ZyntechFeatures = () =>{
    return(
        <Flex alignItems={'center'} direction={'column'}>
            <Flex >
                <button className="learn-more">
                    Learn More
                </button>

            </Flex>
            <Flex direction={'column'}>
            <Heading as='h1' size='4xl' noOfLines={1} fontWeight={"bold"}>
                Get More done With Zyntech
            </Heading>
            <Heading as='h2' size='3xl' >
                Starting a project should be a celebration, not a nightmare.
            </Heading>

            </Flex>
            <Flex gap={'50px'} alignItems={'center'}>
                <Flex border={'2px white solid' } height={'210px'} width={'250px'} direction={'column'}  alignItems={'center'} borderRadius={'1rem'}>
                    <img alt='feature1' src={feature1} className='feature1'/>
                    <Heading as='h4' size='md'>No surprices or hidden fees</Heading>
                    <Heading as='h5' size='sm'>Learn More</Heading>

                    </Flex>
                <Flex border={'2px white solid' } height={'210px'} width={'250px'} direction={'column'} alignItems={'center'} borderRadius={'1rem'}>
                <img alt='feature2' src={feature2} className='feature1'/>
                    <Heading as='h4' size='md'>24/7 Global customer support</Heading>
                <Heading as='h5' size='sm'>Get helpful, real human answers from our dedicated support teams wherever you are.</Heading>
                    </Flex>
                <Flex border={'2px white solid' } height={'210px'} width={'250px'} direction={'column'} alignItems={'center'} borderRadius={'1rem'}>
                <img alt='feature3' src={feature3} className='feature1'/>
                <Heading as='h4' size='md'> 60 days money back guarantee </Heading>
                <Heading as='h5' size='sm'>If you're not satisfied for any reason, you'll get a full refund, minus state and third-party fees, within 60days of purchase.</Heading>

                
                   </Flex>
            </Flex>
            
        </Flex>

    )
}

export default ZyntechFeatures;