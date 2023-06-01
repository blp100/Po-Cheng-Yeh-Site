import {
  Box,
  Container,
  Heading,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsSignDeadEndFill } from "react-icons/bs";
import Layout from "../components/layouts/article";

const Posts = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize="1.25rem" mb={4}>
          Posts
        </Heading>
        <Box textAlign="center">
          <Icon
            as={BsSignDeadEndFill}
            boxSize={36}
            color={useColorModeValue("red.700", "#FBB6CE")}
          />
          <Text>Posts page is coming soon</Text>
        </Box>
      </Container>
    </Layout>
  );
};

export default Posts;
