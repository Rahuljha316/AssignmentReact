import { Flex } from '@chakra-ui/react'
let logo = require('../assets/logo.png')

const NavBar = () =>{

    const handleSignInClick = () =>{

    }
    const handleSignUpClick = () =>{

    }
    const handleProductClick = () =>{

    }
    const handleCompanyClick = () =>{

    }
    const handlePartnersClick = () =>{

    }
    const handlePricingClick = () =>{

    }
    const handleRewardsClick = () =>{

    }
    const handleResourcesClick = () =>{

    }
    return (
        <div className="navbar">

        <Flex >
            <Flex  flex='1'>
                <img className='logo' alt="logo" src={logo} />
            </Flex>
            <Flex flex='2' gap={20}>
                <Flex onClick={handleProductClick}> Products</Flex>
                <Flex onClick={handleCompanyClick}> Company</Flex>
                <Flex onClick={handlePricingClick}> Pricing</Flex>
                <Flex onClick={handleRewardsClick}> Rewards</Flex>
                <Flex onClick={handlePartnersClick}> Partners</Flex>
                <Flex onClick={handleResourcesClick}> Resources</Flex>
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