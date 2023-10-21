import { Container, Badge, Link, List, ListItem, Box, SimpleGrid } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Meta, Title, WorkImage } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
  return (
    <Layout title="Github">
      <Container>
        <Title>
          GitHub user search app <Badge>2023</Badge>
        </Title>
        <P>
          As my third challenge on Frontend Mentor, I aimed to dive into working
          with APIs. The challenge presented an opportunity to implement a dark
          mode, which was new territory for me with tailwindCSS, adding a layer
          of excitement to the project. Moreover, this challenge led me to
          further explore React and data fetching, utilizing Postman. The
          experience was both enjoyable and intriguing. I look forward to
          engaging with more APIs to enhance the user experience, making it even
          more user-friendly and interactive.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link
              target="_blank"
              href="https://github-user-search-app-bay.vercel.app/"
            >
              https://github-user-search-app-bay.vercel.app/
              <ExternalLinkIcon ml={2} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link
              target="_blank"
              href="https://github.com/blp100/github-user-search-app"
            >
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
            <span>React, tailwindCSS, HTML, GitHub API</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/github-01.png" />
        <SimpleGrid columns={2} gap={4} w="fit-content">
          <WorkImage src="/images/works/github-02.png" />
          <WorkImage src="/images/works/github-03.png" />
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Work;
