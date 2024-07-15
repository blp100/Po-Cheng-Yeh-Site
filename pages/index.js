import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  Image,
  List,
  ListItem,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import Section from "../components/section";
import Paragragh from "../components/paragraph";
import NextLink from "next/link";
import Layout from "../components/layouts/article";
import { BioSection, BioYear } from "../components/bio";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { TbGitMerge } from "react-icons/tb";
import { WorkGridItem } from "../components/grid-item";
import thumbKanban from "../public/images/works/kanban-thumbnail.png";
import thumbGobblers from "../public/images/works/gobblers-thumbnail.png";
import thumbChillka from "../public/images/works/chillka-thumbnail.png";

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
          Hello. I'm a developer based in Singapore and Taiwan
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
              src="/images/profile.png"
              alt="Profile Image"
            ></Image>
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragragh>
            I am a frontend developer, striving towards becoming a full-stack
            developer. In addition to my tech endeavors, I have hands-on
            experience as a retail store manager. Have a strong passion for
            aesthetically pleasing designs and aspire to make a meaningful
            impact on the world through online contributions.
          </Paragragh>
          <Box textAlign="center" my={4}>
            <NextLink href="/works">
              <Button
                rightIcon={<Icon ml={-1} as={TbGitMerge} boxSize={5} />}
                colorScheme="teal"
              >
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
            Born in Taipei, Taiwan（台灣）
          </BioSection>
          <BioSection>
            <BioYear>2008</BioYear>
            Completed the Bachelor&apos;s Computer Science and Electrical
            Engineering in the Department of Electronic Engineering at National
            Kaosiung University of Science and
            Technology（國立高雄科技大學電子工程系-電腦科學與電子工程）
          </BioSection>
          <BioSection>
            <BioYear>2008-2009</BioYear>
            Military service
          </BioSection>
          <BioSection>
            <BioYear>2010-2012</BioYear>
            Front-End Developer at Aesopower, Inc.（象量科技股份有限公司）
          </BioSection>
          <BioSection>
            <BioYear>2014-2023</BioYear>
            Store Manager at boardgame store BGBOX（桌遊盒子）
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Hobbies
          </Heading>
          <Paragragh>
            Jazz Music, Boardgame, Playing Guitar, Reading, Hiking
          </Paragragh>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Social Media
          </Heading>
          <List>
            <ListItem>
              <NextLink href="https://github.com/blp100" target="_blank">
                <Button
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} boxSize={6} />}
                  variant="ghost"
                >
                  @blp100
                </Button>
              </NextLink>
            </ListItem>
            <ListItem>
              <NextLink
                href="https://www.linkedin.com/in/po-cheng-yeh/"
                target="_blank"
              >
                <Button
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} boxSize={6} />}
                  variant="ghost"
                >
                  /po-cheng-yeh
                </Button>
              </NextLink>
            </ListItem>
            <ListItem>
              <NextLink
                href="https://github.com/blp100/Po-Cheng-Yeh-Site"
                target="_blank"
              >
                <Button
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} boxSize={6} />}
                  variant="ghost"
                >
                  Website Source Code
                </Button>
              </NextLink>
            </ListItem>
          </List>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Side Project
          </Heading>
          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <WorkGridItem
              id="chill-ka"
              title="ChillKa"
              thumbnail={thumbChillka}
            >
              ChillKa - Ticketing System
            </WorkGridItem>
          </SimpleGrid>
        </Section>
        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            Top Challenges
          </Heading>
          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <WorkGridItem
              id="gobblers"
              title="Gobblers"
              thumbnail={thumbGobblers}
            >
              Gobblet Gobblers 3D
            </WorkGridItem>
            <WorkGridItem id="kanban" title="Kanban" thumbnail={thumbKanban}>
              Kanban Task Management Web App
            </WorkGridItem>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  );
};

export default Page;
