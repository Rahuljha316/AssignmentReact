import { Flex } from '@chakra-ui/react'
let logo = require('../assets/logo.png')

const NavBar = () =>{

    const handleSignInClick = () =>{

    }
    const handleSignUpClick = () =>{

    }
    return (
        <div className="navbar">

        <Flex >
            <Flex  flex='1'>
                <img className='logo' alt="logo" src={logo} />
            </Flex>
            <Flex flex='2' gap={20}>
                <Flex> Products</Flex>
                <Flex> Company</Flex>
                <Flex> Pricing</Flex>
                <Flex> Rewards</Flex>
                <Flex> Partners</Flex>
                <Flex> Resources</Flex>
            </Flex>
            <Flex flex='1' >
                <button onClick={handleSignInClick} className='signin'>sign in</button>
                <button onClick={handleSignUpClick} className='signup'>Start with us</button>
            </Flex>
        </Flex>
           
           
        </div>
    )
}

export default NavBar;