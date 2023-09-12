import { Container, Badge, Link, List, ListItem, Box } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Meta, Title, WorkImage } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
  return (
    <Layout title="Artgallery">
      <Container>
        <Title>
          Art Gallery Website <Badge>2023</Badge>
        </Title>
        <P>
          This challenge ignited my passion for frontend development with its
          stunning design. It provided the perfect opportunity to delve into map
          development. I learned to create responsive images using HTML tags and
          mastered Tailwind CSS for styling. Exploring custom CSS animations and
          implementing Leaflet.js for interactive maps enriched my skill set.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link
              target="_blank"
              href="https://blp100.github.io/art-gallery-website"
            >
              https://blp100.github.io/art-gallery-website
              <ExternalLinkIcon ml={2} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link
              target="_blank"
              href="https://github.com/blp100/art-gallery-website"
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
        <WorkImage src="/images/works/artgallery-01.png" />
        <Box display="flex" gap={4}>
          <WorkImage src="/images/works/artgallery-02.png" />
          <WorkImage src="/images/works/artgallery-03.png" />
        </Box>
      </Container>
    </Layout>
  );
};

export default Work;
