import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Meta, Title, WorkImage } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";
import { SkullIcon } from "../../components/icons/skull";

const Work = () => {
  return (
    <Layout title="Aesopower">
      <Container>
        <Title>
          Aesopower Inc. <Badge>2011</Badge>
        </Title>
        <P>
          A company homepage build on Google site. It's really old tech but
          firm. Helped the design on first version. (This Website is out of date now.)<SkullIcon ml={2} />
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link target="_blank" href="http://www.aesopower.com">
              http://www.aesopower.com
              <ExternalLinkIcon ml={2}/>
              <SkullIcon ml={2} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Google Site</span>
          </ListItem>
          <ListItem>
            <Meta>Stcak</Meta>
            <span>CSS, Html</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/aesopower-01.png"/>
      </Container>
    </Layout>
  );
};

export default Work;
