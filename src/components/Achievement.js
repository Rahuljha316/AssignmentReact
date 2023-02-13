import { Flex,Heading } from "@chakra-ui/react"

const Achievement = () =>{
    return (
        <Flex >
            <Flex direction={'column'} textAlign={'center'} flex={'1'} justifyContent="center">
                <Flex justifyContent={'center'}>45+</Flex>
                <Flex justifyContent={'center'}>WordPress developers</Flex>
            </Flex>
            <Flex direction={'column'} textAlign={'center'} flex={'1'} justifyContent="center">
                <Flex justifyContent={'center'}>20+</Flex>
                <Flex justifyContent={'center'}>Countries with happy client</Flex>
            </Flex>
            <Flex direction={'column'} textAlign={'center'} flex={'1'}>
                <Flex justifyContent={'center'}> 100+</Flex>
                <Flex justifyContent={'center'}>WordPress projects completed</Flex>
            </Flex>
            
            
        </Flex>
    )
}

export default Achievement;