import { Flex, Heading } from "@chakra-ui/react"

const Faqs = () =>{
    return(
        <Flex direction={'column'} className='faq-div'>
            <Flex direction={"column"} alignItems={'center'} width={'100vw'}>
            
                <Heading as='h3' size='md'  textAlign={'center'} >
                faqs
                </Heading>

                <Heading as='h2' size='3xl' fontweight={"bold"} textAlign={'center'} >
                Frequently asked questions
                </Heading>
            </Flex>
            <Flex direction={'column'} gap={'10px'}>
                <Flex className="faqs">What is website Stratergy?</Flex>
                <Flex className="faqs">Why do i need a website Plan?</Flex>
                <Flex className="faqs">How much do the packages cost?</Flex>
                <Flex className="faqs">What's included  in your packages?</Flex>
                <Flex className="faqs">How long does it take to complete the website strategy?</Flex>
                <Flex className="faqs">How can i get started?</Flex>
            </Flex>

        </Flex>
    )
}

export default Faqs