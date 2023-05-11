import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import Section from "../components/section";
import Paragragh from "../components/paragraph";
import NextLink from "next/link";
import { CheckCircleIcon } from "@chakra-ui/icons";

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="md"
        bg={useColorModeValue("#ffffff40", "#ffffff10")}
        p="6"
        mt="6"
        mb="6"
        alignItems="center"
      >
        Hello, I'm a developer live in Taiwan and Singapore. <br />
        60-30-10 Color Rule
      </Box>
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Po-Cheng Yeh
          </Heading>{" "}
          <p>Gamer, Boardgamer & Programmer</p>
        </Box>

        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="6.25rem"
            display="inline-block"
            borderRadius="full"
            src="/images/profile-1.jpg"
            alt="Profile Image"
          ></Image>
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragragh>
          I'm a Full-Stack programmer. I was a store manager. And love web
          design and going back to the Internet again.{" "}
        </Paragragh>
        <Box alignItems="center" my={4}>
          <Button rightIcon={<CheckCircleIcon />} colorScheme="teal">
            My portfolio
          </Button>
        </Box>
      </Section>
    </Container>
  );
};

export default Page;
