import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Meta, Title, WorkImage } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
  return (
    <Layout title="Marble Rush">
      <Container>
        <Title>
          Marble Rush with R3F/WebGL <Badge>2024</Badge>
        </Title>
        <P>
          Based on the final course of Three.js Journey, I added a
          mobile-friendly interface and refined it for improved usability.
          Additionally, I implemented shader materials to create a dust effect
          when the ball jumps.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link
              target="_blank"
              href="https://threejs-journey-marble-rush.vercel.app/"
            >
              https://threejs-journey-marble-rush.vercel.app/
              <ExternalLinkIcon ml={2} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>vercel</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React Three Fiber, WebGL Shader, Rapier, zustand</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/marblerush-thumbnail.png" />
        <WorkImage src="/images/works/marblerush-01.png" />
        <WorkImage src="/images/works/marblerush-02.png" />
      </Container>
    </Layout>
  );
};

export default Work;
