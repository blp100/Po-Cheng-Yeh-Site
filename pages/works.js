import { Container, Heading, SimpleGrid, Box, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import thumbAesopower from "../public/images/works/aesopower-thumbnail.png";
import thumbPlexbio from "../public/images/works/plexbio-thumbnail.jpeg";
import thumbCSSwork from "../public/images/works/csswork-thumbnail.png";
import thumbTindog from "../public/images/works/tindog-thumbnail.png";
import thumbSimongame from "../public/images/works/simongame-thumbnail.png";
import thumbTodolist from "../public/images/works/todolist-thumbnail.png";
import thumbGobblers from "../public/images/works/gobblers-thumbnail.png";
import thumbQrcode from "../public/images/works/qrcode-thumbnail.png";
import thumbSkilled from "../public/images/works/skilled-thumbnail.png";
import thumbGithub from "../public/images/works/github-thumbnail.png";
import thumbPomodoro from "../public/images/works/pomodoro-thumbnail.png"
import thumbArtGallery from "../public/images/works/artgallery-thumbnail.png";
import thumbKanban from "../public/images/works/kanban-thumbnail.png";
import Layout from "../components/layouts/article";

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize="1.25rem" mb={4}>
          Top Challenges
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.1}>
            <WorkGridItem
              id="gobblers"
              title="Gobblers"
              thumbnail={thumbGobblers}
            >
              Gobblet Gobblers 3D
            </WorkGridItem>
          </Section>
          <Section delay={0.2}>
            <WorkGridItem id="kanban" title="Kanban" thumbnail={thumbKanban}>
              Kanban Task Management Web App
            </WorkGridItem>
          </Section>
        </SimpleGrid>
        <Divider mb={4} />
        <Heading as="h3" fontSize="1.25rem" mb={4}>
          Frontend Mentor Challenges
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <WorkGridItem
              id="artgallery"
              title="Artgallery"
              thumbnail={thumbArtGallery}
            >
              Art Gallery
            </WorkGridItem>
          </Section>
          <Section delay={0.4}>
            <WorkGridItem
              id="pomodoro"
              title="Pomodoro"
              thumbnail={thumbPomodoro}
            >
              Pomodoro App
            </WorkGridItem>
          </Section>
          <Section delay={0.5}>
            <WorkGridItem id="github" title="GitHub" thumbnail={thumbGithub}>
              GitHub user search app
            </WorkGridItem>
          </Section>
          <Section delay={0.6}>
            <WorkGridItem id="skilled" title="Skilled" thumbnail={thumbSkilled}>
              Skilled e-Learning Landing Page
            </WorkGridItem>
          </Section>
          <Section delay={0.7}>
            <WorkGridItem id="qrcode" title="Qrcode" thumbnail={thumbQrcode}>
              Qrcode Components
            </WorkGridItem>
          </Section>
        </SimpleGrid>
        <Divider mb={4} />
        <Heading as="h3" fontSize="1.25rem" mb={4}>
          Refresh
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.8}>
            <WorkGridItem id="csswork" title="CSSwork" thumbnail={thumbCSSwork}>
              Pure CSS and HTML Challenge
            </WorkGridItem>
          </Section>
          <Section delay={0.9}>
            <WorkGridItem id="tindog" title="tindog" thumbnail={thumbTindog}>
              Responsive Web Design with Bootstrap
            </WorkGridItem>
          </Section>
          <Section delay={1.0}>
            <WorkGridItem
              id="simongame"
              title="SimonGame"
              thumbnail={thumbSimongame}
            >
              JavaScript Game
            </WorkGridItem>
          </Section>
          <Section delay={1.1}>
            <WorkGridItem
              id="todolist"
              title="Todolist"
              thumbnail={thumbTodolist}
            >
              Todolist
            </WorkGridItem>
          </Section>
        </SimpleGrid>
        <Divider mb={4} />
        <Heading as="h3" fontSize="1.25rem" mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={1.2}>
            <WorkGridItem id="plexbio" title="Plexbio" thumbnail={thumbPlexbio}>
              Plexbio Internal Product
            </WorkGridItem>
          </Section>
          <Section delay={1.3}>
            <WorkGridItem
              id="aesopower"
              title="Aesopower"
              thumbnail={thumbAesopower}
            >
              Aesopower about page
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;
