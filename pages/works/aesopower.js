import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Meta, Title, WorkImage } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";
import { SkullIcon } from "../../components/icons/skull-icon";

const Work = () => {
  return (
    <Layout title="Aesopower">
      <Container>
        <Title>
          Aesopower Inc. <Badge>2011</Badge>
        </Title>
        <P>
        Assisted in the design of the initial version of the company homepage built on Google Sites, utilizing a technology that, while outdated, served the purpose effectively at the time. (Please note that the website is currently considered out of date.)<SkullIcon ml={2} />
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
            <Meta>Stack</Meta>
            <span>CSS, HTML</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/aesopower-01.png"/>
      </Container>
    </Layout>
  );
};

export default Work;
