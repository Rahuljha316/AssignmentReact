import { Flex,Heading,Link } from "@chakra-ui/react";

const Summary = () =>{
    return (
        <Flex width={"100%"} justifyContent="center" >
            <Flex direction={"column"}>
                <Heading as='h2' size='xl' fontweight={"bold"} textAlign={'center'} >
                WORLD BEST WORDPRESS AGENCY
                </Heading>
                <Link>
                <Heading as='h3' size='md' textAlign={'center'} textDecoration={'underline'}>
            WordPress Development Services
            </Heading>
                </Link>
                <Heading as='h4' size='sm' textAlign={'center'}>
            Zyntech is a leading wordpress development company providing cost-effective custom WordPress solutions for all your business needs. We develop highly scalable, feature-rich, and robust WordPress websites to improve digital presence.
            <Heading as='h4' size='sm' textAlign={'center'}>
            Our custom WordPress development services include API integration and customization, plugin development,<Link textDecoration={'underline'}>theme dvelopment</Link> theme dvelopment, maintenance and support , and much more.
            </Heading>
            <Heading as='h4' size='sm' textAlign={'center'}>
            At Zyntech we offer top-class services to cater to every kind of business irrespective of sizes-small, medium, and large. 
            </Heading>
           
            
            </Heading>
                
            </Flex>
            <Flex>
                    <h3></h3>
            </Flex>
        </Flex>
    )
}

export default Summary