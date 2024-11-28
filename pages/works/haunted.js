import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Meta, Title, WorkImage } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
  return (
    <Layout title="Haunted">
      <Container>
        <Title>
          Haunted House <Badge>2024</Badge>
        </Title>
        <P>
          Building the scene with customized materials is a significant
          milestone in my 3D journey. By leveraging Three.js built-in addons, I
          was able to create an eerie fog, a haunting sunset, and ghostly souls
          around the house, all of which enhance the atmosphere and bring the
          vibe to life.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link
              target="_blank"
              href="https://threejs-journey-hunting-house.vercel.app/"
            >
              https://threejs-journey-hunting-house.vercel.app/
              <ExternalLinkIcon ml={2} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>vercel</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Three.js</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/haunted-thumbnail.png" />
        <WorkImage src="/images/works/haunted-01.png" />
      </Container>
    </Layout>
  );
};

export default Work;
