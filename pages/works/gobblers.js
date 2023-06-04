import { Container, Badge, Link, List, ListItem, Icon } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Meta, Title, WorkImage } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";
import { IoLogoLinkedin } from "react-icons/io5";

const Work = () => {
  return (
    <Layout title="Gobblers">
      <Container>
        <Title>
          Gobblet Gobblers with Three.js <Badge>2023</Badge>
        </Title>
        <P>
          Build with three.js on the Next.js platform. Chen-Hsin and I
          collaborated on creating a 3D version of a board game. The entire
          process was very joyful. Apart from working with 3D objects, which was
          new to me, I also learned more about using React in different ways.
          I'm quite satisfied with the final game we created. I plan to refactor
          the code and upload it to a repository in the near future.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link
              target="_blank"
              href="https://gobblet-gobblers-up.vercel.app/"
            >
              https://gobblet-gobblers-up.vercel.app/
              <ExternalLinkIcon ml={2} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>vercel</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>

            <span>Three.js, Next.js, React, JavaScript</span>
          </ListItem>
          <ListItem>
            <Meta>Collaborator</Meta>{" "}
            <Link target="_blank" href="https://linkedin.com/in/linchenhsin/">
              <Icon as={IoLogoLinkedin} boxSize={4} mr={2} />
              Lin Chen-Hsin
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Game Rule</Meta>
            <Link
              target="_blank"
              href="https://blueorangegames.eu/wp-content/uploads/2017/04/GOBBLET-GOBBLERS_rules_ML.pdf"
            >
              https://blueorangegames.eu/wp-content/uploads/2017/04/GOBBLET-GOBBLERS_rules_ML.pdf
              <ExternalLinkIcon ml={2} />
            </Link>
          </ListItem>
        </List>
        <WorkImage src="/images/works/gobblers-01.png" />
        <WorkImage src="/images/works/gobblers-02.png" />
      </Container>
    </Layout>
  );
};

export default Work;
