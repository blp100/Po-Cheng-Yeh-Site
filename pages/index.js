import { Box, Container, Heading } from "@chakra-ui/react";

const Page = () => {
  return (
    <Container>
      <Box borderRadius="md" bg="orange.100" p="3" mb="6" align="center">
        Hello, I'm a developer live in Taiwan and Singapore. <br />
        60-30-10 Color Rule
      </Box>
      <Box>
        <Box flexGrow={1}>
          <Heading as="h2">Po-Cheng Yeh</Heading>
        </Box>
        <p>Gamer, Boardgamer & Programmer</p>
      </Box>
    </Container>
  );
};

export default Page;
