import { Container, Badge, Link, List, ListItem, Box, SimpleGrid } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Meta, Title, WorkImage } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
  return (
    <Layout title="Pomodoro">
      <Container>
        <Title>
          Pomodoro app <Badge>2023</Badge>
        </Title>
        <P>
          I aimed to explore the Pomodoro timer concept and refine my CSS
          animation skills. Utilizing Chakra UI and Framer Motion for the second
          time, I delved into custom theming and animation creation. Users can
          set pomodoro, short & long break timers, customize timer durations,
          observe a circular progress bar updating every minute, and personalize
          the app's appearance, including colors and fonts. Although project
          requirements and personal preferences sometimes clashed, this
          challenge allowed creative freedom. It kindled a desire to further
          refine the Pomodoro concept in future projects.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link target="_blank" href="https://comadoro-timer.vercel.app/">
              https://comadoro-timer.vercel.app/
              <ExternalLinkIcon ml={2} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link target="_blank" href="https://github.com/blp100/pomodoro-app">
              github
              <ExternalLinkIcon ml={2} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>vercel</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React, Chakra-UI, Framer Motion, Next.js</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/pomodoro-thumbnail.png" />
        <SimpleGrid columns={2} gap={4} w="fit-content">
          <WorkImage src="/images/works/pomodoro-01.png" />
          <WorkImage src="/images/works/pomodoro-02.png" />
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Work;
