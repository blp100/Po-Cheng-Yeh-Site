import { Icon } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";

export const SkullIcon = (props) => (
  <Icon
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    color={useColorModeValue("gray.800", "whiteAlpha.900")}
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M12 4c4.418 0 8 3.358 8 7.5c0 1.901 -.755 3.637 -2 4.96l0 2.54a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1v-2.54c-1.245 -1.322 -2 -3.058 -2 -4.96c0 -4.142 3.582 -7.5 8 -7.5z"></path>
    <path d="M10 17v3"></path>
    <path d="M14 17v3"></path>
    <path d="M9 11m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
    <path d="M15 11m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
  </Icon>
);
