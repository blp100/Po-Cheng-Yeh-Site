import { Container, Badge, Link, List, ListItem, Box } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Meta, Title, WorkImage } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
  return (
    <Layout title="Simongame">
      <Container>
        <Title>
          SimonGame - JavaScript without framework <Badge>2022</Badge>
        </Title>
        <P>
          I took on the challenge of revamping the famous Simon game from 1978
          to make it playable on mobile devices. It took me several days to
          fix the compatibility issues. Although it's not yet the perfect
          end product I envisioned, the entire learning process was incredibly
          enjoyable.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link target="_blank" href="https://blp100.github.io/SimonGame/">
              https://blp100.github.io/SimonGame/
              <ExternalLinkIcon ml={2} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>github</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>JavsScript, CSS, HTML</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/simongame-01.png" />
        <WorkImage src="/images/works/simongame-thumbnail.png" />
      </Container>
    </Layout>
  );
};

export default Work;
