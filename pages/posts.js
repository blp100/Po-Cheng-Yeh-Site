import { Box, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import { BsSignDeadEndFill } from "react-icons/bs";

const Posts = () => {
  return (
    <Box textAlign="center">
      <Icon
        as={BsSignDeadEndFill}
        boxSize={36}
        color={useColorModeValue("red.700", "#FBB6CE")}
      />
      <Text>Posts page is coming soon</Text>
    </Box>
  );
};

export default Posts;
