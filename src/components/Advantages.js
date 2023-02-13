import { Flex, Heading } from "@chakra-ui/react";

const Advantages = () =>{
    return(
        <Flex justifyContent={'center'} >
            <Flex  textAlign={'center'} justifyContent={'center'} direction={'column'}>
            <Heading as='h3' size='md' fontweight={"bold"} justifyContent={'center'} >
                Why should you choose wordpress?
            </Heading>
            <Heading as='h4' size='md' justifyContent={'center'} >
                With over 40% of the website market share, WordPresss brings many website development services. Although it's one of the most powerful content management systems, WordPress is also the simplest, making your development experience very pleasing. You can benefit from coutless plugins and add-on features that make WordPress website management easy. At Zyntech, we offer WordPress development services at affordable prices.
            </Heading>

            </Flex>
            
        </Flex>
    )
}

export default Advantages;