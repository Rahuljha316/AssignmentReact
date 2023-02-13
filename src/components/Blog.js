import { Flex,Heading } from "@chakra-ui/react";
let BlogImg1 = require('../assets/blog1.png')
let BlogImg2 = require('../assets/blog2.png')

const Blog = () => {
  return (
    <Flex direction={'column'} className='blog-div' >
        <Flex >
            <Heading as='h2' size='3xl' fontweight={"bold"}  >
                Our Blog
            </Heading>
            
        </Flex>
      <Flex>
        <Flex  flex={"1"}>
            <img alt="blog" src={BlogImg1}/>
            <Flex className="blog"> Morbi leo quam, lacinia vel egestas sed, pharetra eget mi. Proin eleifend non tellus ut volutpat. Pellentesque pharetra lorem odio, porta ullamcorper enim cursus in. Aliquam odio lorem, porta nec convallis a, gravida et ex. Nulla facilisi. </Flex>
        </Flex>
        <Flex  flex={"1"}>
            <img alt="blog" src={BlogImg2}/>
            <Flex className="blog"> Morbi leo quam, lacinia vel egestas sed, pharetra eget mi. Proin eleifend non tellus ut volutpat. Pellentesque pharetra lorem odio, porta ullamcorper enim cursus in. Aliquam odio lorem, porta nec convallis a, gravida et ex. Nulla facilisi</Flex>
        </Flex>
        
      </Flex>
    </Flex>
  );
};

export default Blog;
