import { Container, Badge, Link, List, ListItem, Box, SimpleGrid } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Meta, Title, WorkImage } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
  return (
    <Layout title="TinDog">
      <Container>
        <Title>
          Responsive Web Design Challenge <Badge>2022</Badge>
        </Title>
        <P>
          As a web developer, I've discovered that designing responsive websites
          has become much easier with the use of Bootstrap framework compared to
          a decade ago. However, it also allows for more creative possibilities,
          leading me to learn more about the fundamental concepts of CSS in
          enterprise web design.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link target="_blank" href="https://blp100.github.io/tindog/">
              https://blp100.github.io/tindog/
              <ExternalLinkIcon ml={2} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>github</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Bootstrap, Font Awesome, CSS, HTML</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/tindog-01.png" />
        <SimpleGrid columns={2} gap={4} w="fit-content">
          <WorkImage src="/images/works/tindog-02.jpg" />
          <WorkImage src="/images/works/tindog-03.jpg" />
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Work;
