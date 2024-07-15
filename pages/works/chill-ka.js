
import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Meta, Title, WorkImage } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
  return (
    <Layout title="chill-ka">
      <Container>
        <Title>
          ChillKa - Ticketing <Badge>2024</Badge>
        </Title>
        <P>
          I'm excited to share my side project, a platform designed to bring
          people together to support and enjoy great events. Our goal is to
          create a better and more enjoyable life for everyone by fostering a
          community around engaging and memorable experiences.
        </P>
        <P>
          Over the past four months, our team of six dedicated members
          (including myself) has worked tirelessly after hours to bring this
          project to life. We love learning new technologies and are constantly
          striving to improve our platform.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link target="_blank" href="https://chillka-frontend.vercel.app/">
              https://chillka-frontend.vercel.app/
              <ExternalLinkIcon ml={2} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Source (Front-end)</Meta>
            <Link
              target="_blank"
              href="https://github.com/ChillKa/chillka-frontend"
            >
              github
              <ExternalLinkIcon ml={2} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Vercel</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              Next.JS, Type Script, tailwindCSS, shadcn(radix), Zod,
              react-hook-form, Google Maps API, Web Socket
            </span>
          </ListItem>
          <ListItem>
            <Meta>Source (Back-end)</Meta>
            <Link
              target="_blank"
              href="https://github.com/ChillKa/chillka-backend"
            >
              github
              <ExternalLinkIcon ml={2} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Render</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              Node.js, Swagger, EmailJS, MongoDB, Google OAuth 2.0, Web
              Socket
            </span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/chillka-01.png" />
        <WorkImage src="/images/works/chillka-02.png" />
        <SimpleGrid columns={2} gap={4} w="fit-content">
          <WorkImage src="/images/works/chillka-03.png" />
          <WorkImage src="/images/works/chillka-04.png" />
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Work;
