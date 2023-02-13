import { Flex, Heading } from "@chakra-ui/react";

const Feature = () => {
  return (
    <Flex justifyContent={"center"} direction={"column"}>
      <Heading as="h3" size="md" fontweight={"bold"} textAlign={"center"}>
        OUR FEATURE RICH COMPREHENSIVE SERVICES
      </Heading>
      <Flex justifyContent={"center"}>
        <Flex textAlign={'left'}>
          <ul >
            <li>Fully Responsive Website</li>
            <li>Hassle Free WordPress Upgrading</li>
            <li>Complete Security</li>
          </ul>
        </Flex>

        <Flex textAlign={'left'}>
          <ul>
            <li>At par Maintenance Services</li>
            <li>All Types of Migrations</li>
            <li>Progressive Web Apps</li>
          </ul>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Feature;
