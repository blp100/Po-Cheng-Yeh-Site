import { Box, Container, Heading, useColorModeValue } from "@chakra-ui/react";

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="md"
        bg={useColorModeValue("#ffffff40", "#ffffff10")}
        p="6"
        mt="6"
        mb="6"
        align="center"
      >
        Hello, I'm a developer live in Taiwan and Singapore. <br />
        60-30-10 Color Rule
      </Box>
      <Box>
        <Box flexGrow={1}>
          <Heading>Po-Cheng Yeh</Heading>
        </Box>
        <p>Gamer, Boardgamer & Programmer</p>
      </Box>
    </Container>
  );
};

export default Page;
