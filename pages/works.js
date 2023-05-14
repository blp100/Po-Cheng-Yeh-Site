import { Container, Heading, SimpleGrid, Box, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import thumbAesopower from "../public/images/works/aesopower-inc.png";

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize="1.25rem" mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6} >
        <Section>
          <WorkGridItem
            id="aesopower"
            title="Aesopower"
            thumbnail={thumbAesopower}
          >
            Aesopower about page
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="aesopower"
            title="Aesopower"
            thumbnail={thumbAesopower}
          >
            Aesopower Home Page
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  );
};

export default Works;
