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
import Layout from "../components/layouts/article";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { BioSection, BioYear } from "../components/bio";

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="md"
          bg={useColorModeValue("#ffffff40", "#ffffff10")}
          p="6"
          mt="6"
          mb="6"
          textAlign="center"
        >
          Hello, I'm a developer live in Taiwan and Singapore.
        </Box>
        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Po-Cheng Yeh
            </Heading>
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
          <Box textAlign="center" my={4}>
            <NextLink href="/works">
            <Button rightIcon={<CheckCircleIcon />} colorScheme="teal">
              My portfolio
            </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1986</BioYear>
            Born in Taipei（台北）, Taiwan.
          </BioSection>
          <BioSection>
            <BioYear>2008</BioYear>
            Completed the Bachelor&apos;s Computer Science and Electrical
            Engineering in the Department of Electronic Engineering at National
            Kaosiung University of Science and
            Technology.（國立高雄科技大學電子工程系-電腦科學與電子工程）
          </BioSection>
          <BioSection>
            <BioYear>2008-2009</BioYear>
            Military service
          </BioSection>
          <BioSection>
            <BioYear>2010-2012</BioYear>
            Front-End Developer Worked at Aesopower,
            Inc.（象量科技股份有限公司）
          </BioSection>
          <BioSection>
            <BioYear>2014-2023</BioYear>
            Store Manager Worked at boardgame store BgboxTaiwan（桌遊盒子）
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragragh>
            Music, Boardgame, Playing Guitar, Reading, Hiking
          </Paragragh>
        </Section>
      </Container>
    </Layout>
  );
};

export default Page;
