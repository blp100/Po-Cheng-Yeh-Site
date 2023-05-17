import { Container, Heading, SimpleGrid, Box, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import thumbAesopower from "../public/images/works/aesopower-thumbnail.png";
import thumbPlexbio from "../public/images/works/plexbio-thumbnail.jpeg";
import Layout from "../components/layouts/article";

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize="1.25rem" mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.1}>
            <WorkGridItem id="plexbio" title="Plexbio" thumbnail={thumbPlexbio}>
              Plexbio Internal Product
            </WorkGridItem>
          </Section>
          <Section>
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
