import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Meta, Title, WorkImage } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
  return (
    <Layout title="Protal">
      <Container>
        <Title>
          Protal with backed scene <Badge>2024</Badge>
        </Title>
        <P>
          Built the entire scene in Blender, baked it, and imported it into
          Three.js. Controlled the portal colors using GLSL. The colors, portal,
          fireflies—everything in this scene brings me so much joy!
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link
              target="_blank"
              href="https://threejs-journey-baked-scene.vercel.app/"
            >
              https://threejs-journey-baked-scene.vercel.app/
              <ExternalLinkIcon ml={2} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>vercel</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Three.js, WebGL Shader, Blender</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/protal-thumbnail.png" />
        <WorkImage src="/images/works/protal-01.png" />
        <WorkImage src="/images/works/protal-02.png" />
      </Container>
    </Layout>
  );
};

export default Work;
