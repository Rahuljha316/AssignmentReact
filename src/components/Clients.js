import { Flex,Heading } from "@chakra-ui/react"
let ClientImg = require('../assets/client.png')

const Clients = ()=>{
    return(
        <Flex className="clients">
            <Flex direction={ 'column'}>
            <Heading as='h3' size='md' fontweight={"bold"} textAlign={'center'} >
                Hear what our client says about us
            </Heading>
            <Flex gap={'10px'}>
                <img alt="image" src={ClientImg}/>
                <Heading as='h5' size='sm' className="client-message"  textAlign={'left'} flex={'1'} >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, inventore maiores magnam aperiam enim labore ea dignissimos voluptatibus, voluptate reprehenderit, hic mollitia nostrum iste rem esse earum provident nam maxime modi voluptatum repudiandae dolore.
                <br/>
                <br/>
                <br/>

                -yash
                
            </Heading>
                <Heading as='h5' size='sm' className="client-message"  textAlign={'left'} flex={'1'} >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, inventore maiores magnam aperiam enim labore ea dignissimos voluptatibus, voluptate reprehenderit, hic mollitia nostrum iste rem esse earum provident nam maxime modi voluptatum repudiandae dolore.
                <br />
                <br />
                <br />
                -bill
                
            </Heading>


            </Flex>
            

            </Flex>

        </Flex>
    )
}

export default Clients;