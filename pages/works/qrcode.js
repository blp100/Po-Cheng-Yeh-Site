import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Meta, Title, WorkImage } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
  return (
    <Layout title="Qrcode">
      <Container>
        <Title>
          Qrcode Components <Badge>2023</Badge>
        </Title>
        <P>
          I started the Frontend Mentor project to become more familiar with
          modern front-end techniques. This is my first project, and it involves
          creating a simple HTML and CSS design. My goal is to ensure everything
          is executed perfectly on Front-end Mentor. I would like to mention
          that Frontend Mentor is an excellent platform for beginners to enhance
          their skills. You should definitely give it a try!
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link
              target="_blank"
              href="https://blp100.github.io/qr-code-component-main/"
            >
              https://blp100.github.io/qr-code-component-main/
              <ExternalLinkIcon ml={2} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link
              target="_blank"
              href="https://github.com/blp100/qr-code-component-main"
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
            <span>HTML, CSS</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/qrcode-thumbnail.png" />
      </Container>
    </Layout>
  );
};

export default Work;
