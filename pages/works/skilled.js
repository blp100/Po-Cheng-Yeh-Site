import { Container, Badge, Link, List, ListItem, Box, SimpleGrid } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Meta, Title, WorkImage } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
  return (
    <Layout title="Skilled">
      <Container>
        <Title>
          Skilled e-Learning Landing Page <Badge>2023</Badge>
        </Title>
        <P>
          This Frontend Mentor challenge marked my first experience with Figma
          and tailwindCSS, offering insights into modern frontend development. I
          embraced a mobile-first approach and learned valuable techniques like
          utilizing HTML "pictures" tags for device-specific heights. I must
          emphasize that Tailwind CSS is an excellent tool, and I'm enthusiastic
          about taking on more projects with it.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link
              target="_blank"
              href="https://blp100.github.io/skilled-elearning-landing-page"
            >
              https://blp100.github.io/skilled-elearning-landing-page/
              <ExternalLinkIcon ml={2} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link
              target="_blank"
              href="https://github.com/blp100/skilled-elearning-landing-page"
            >
              github
              <ExternalLinkIcon ml={2} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>github</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>tailwindCSS, HTML</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/skilled-01.png" />
        <SimpleGrid columns={2} gap={4} w="fit-content">
          <WorkImage src="/images/works/skilled-02.png" />
          <WorkImage src="/images/works/skilled-03.png" />
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Work;
