import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Meta, Title, WorkImage } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";
import { TbFileAlert } from "react-icons/tb";

const Work = () => {
  return (
    <Layout title="Todolist">
      <Container>
        <Title>
          Todolist with ejs Template <Badge>2022</Badge>
        </Title>
        <P>
          Compared to PHP and MySQL, creating dynamic web pages has become much
          easier nowadays. The best part is that we can now write everything in
          JavaScript, reducing the learning curve significantly. In this
          project, the most interesting parts are using EJS and MongoDB. They
          are lightweight, flexible, and perfect for small-scale projects.
        </P>
        <P>
          By the way, I faced some challenges while deploying with GitHub
          Actions on Firebase. Nonetheless, it has been an enjoyable experience
          to learn about modern-day CI/CD practices.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link target="_blank" href="https://todolist-782dc.web.app/">
              https://todolist-782dc.web.app/
              <ExternalLinkIcon ml={2} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>
              <TbFileAlert ml={2} />
            </Meta>
            <span>Non-Responsive</span>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Firebase</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Node.js, ejs, JavaScript, CSS, HTML</span>
          </ListItem>
          <ListItem>
            <Meta>Database</Meta>
            <span>MongoDB</span>
          </ListItem>
          <ListItem>
            <Meta>Workflow</Meta>
            <span>Github Actions</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/todolist-01.png" />
      </Container>
    </Layout>
  );
};

export default Work;
