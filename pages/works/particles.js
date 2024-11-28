import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Meta, Title, WorkImage } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
  return (
    <Layout title="Particles">
      <Container>
        <Title>
          Particles Cursor Animation <Badge>2024</Badge>
        </Title>
        <P>
          Creating particles in Three.js, customizing them with GLSL, and making
          them interactive with the mouse. It’s incredible to see the power of
          the GPU in action, and it’s inspired me to dive even deeper into the
          world of shaders!
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link
              target="_blank"
              href="https://threejs-journey-particles-cursor-animation.vercel.app/"
            >
              https://threejs-journey-particles-cursor-animation.vercel.app/
              <ExternalLinkIcon ml={2} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>vercel</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Three.js, WebGL Shader</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/particles-thumbnail.png" />
        <WorkImage src="/images/works/particles-01.png" />
        <WorkImage src="/images/works/particles-02.png" />
      </Container>
    </Layout>
  );
};

export default Work;
