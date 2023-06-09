import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Meta, Title, WorkImage } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";
import NextLink from "next/link";

const Work = () => {
  return (
    <Layout title="Plexbio">
      <Container>
        <Title>
          Plexbio Prototype Machine Interface <Badge>2012</Badge>
        </Title>
        <P>
          Worked on an internal project for{" "}
          <Link as={NextLink} target="_blank" href="https://www.plexbio.com/">
            PlexBio
            <ExternalLinkIcon ml={2} />
          </Link>
          , where I implemented minimalistic coding and designed the user
          interface using{" "}
          <Link
            as={NextLink}
            target="_blank"
            href="https://github.com/minimalcomps/minimalcomps"
          >
            Minimalcomps
          </Link>
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows system</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Action Scripit 3.0, Minimalcomps</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/plexbio-01.png" />
      </Container>
    </Layout>
  );
};

export default Work;
