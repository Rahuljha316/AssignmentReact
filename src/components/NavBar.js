import { Flex } from '@chakra-ui/react'

const NavBar = () =>{

    const handleSignInClick = () =>{

    }
    const handleSignUpClick = () =>{

    }
    return (
        <div className="NavBAr">

        <Flex >
            <Flex  flex='1'>
                <img alt="logo" />
            </Flex>
            <Flex flex='2'>
                <Flex> Products</Flex>
                <Flex> Company</Flex>
                <Flex> Pricing</Flex>
                <Flex> Rewards</Flex>
                <Flex> Partners</Flex>
                <Flex> Resources</Flex>
            </Flex>
            <Flex flex='1' >
                <button onClick={handleSignInClick}>sign in</button>
                <button onClick={handleSignUpClick}>Start with us</button>
            </Flex>
        </Flex>
           
           
        </div>
    )
}

export default NavBar;