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
    <Layout title="kanban">
      <Container>
        <Title>
          Kanban Task Management Web App <Badge>2023</Badge>
        </Title>
        <P>
          In the Frontend Mentor challenge, I tackled the complex Kanban Task
          Management Web App project, dedicating 25 days to this intense
          learning experience. My objectives included mastering Next.js' App
          Router and dynamic routes, exploring JSON data manipulation, data
          fetching, and storage within frontend development. The challenge
          encompassed responsive layouts, hover interactions, CRUD operations
          for boards and tasks, task status updates, and theme toggling. Local
          storage and UUID integration added data verification capabilities.
          Despite encountering issues like the Firefox overflow bug, I achieved
          a mobile-friendly design and improved user experience. The challenge
          has sparked anticipation for future learning endeavors.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link
              target="_blank"
              href="https://kanban-task-management-web-app-one.vercel.app/"
            >
              https://kanban-task-management-web-app-one.vercel.app/
              <ExternalLinkIcon ml={2} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link
              target="_blank"
              href="https://github.com/blp100/kanban-task-management-web-app"
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
            <span>React, Chakra-UI, Next.js</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/kanban-01.png" />
        <SimpleGrid columns={2} gap={4} w="fit-content">
          <WorkImage src="/images/works/kanban-02.png" />
          <WorkImage src="/images/works/kanban-03.png" />
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Work;
