import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "../navbar";
import IntroAnimation from "../intro-animation";

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meat name="viewport" content="width=device-width, initial-scale=1" />
        <title>Po-Cheng Yeh Website</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt="14">
        <IntroAnimation />
        {children}
      </Container>
    </Box>
  );
};

export default Main;
