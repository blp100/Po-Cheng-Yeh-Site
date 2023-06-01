import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Meta, Title, WorkImage } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
  return (
    <Layout title="CSSwork">
      <Container>
        <Title>
          CSS Challenge <Badge>2022</Badge>
        </Title>
        <P>
          This is my first step towards returning to the field of web
          development. I am revisiting the fundamentals of pure CSS and HTML and
          gaining a deeper understanding of how CSS manipulates web pages.
          During the course, the instructor introduced us to{" "}
          <Link target="_blank" href="https://colorhunt.co/">
            ColorHunt
            <ExternalLinkIcon ml={2} />
          </Link>
          , a website that I found incredibly useful.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link target="_blank" href="https://blp100.github.io/CssWork/">
              https://blp100.github.io/CssWork/
              <ExternalLinkIcon ml={2} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>github</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>CSS, HTML</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/csswork-01.png" />
        <WorkImage src="/images/works/csswork-02.png" />
      </Container>
    </Layout>
  );
};

export default Work;
