import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { LogoIcon } from "./icons/logo-icon";

const LogoBox = styled.span`
  font-weight: 600;
  font-size: 1.1rem;
  display: inline-flex;
  align-items: center;
  height: 1.75rem
  line-height: 1.5rem;
  padding: 10px;

  svg{
    transition: 110ms;
  }

  &:hover svg{
    transform: rotate(-20deg);
  }
`;

const Logo = () => {
  const imagePath = `/images/icons/icon-logo.svg`;

  return (
    <Link href="/">
        <LogoBox>
          <LogoIcon />
          {/* <Image src={imagePath} height={20} width={20} alt="Logo" /> */}
          <Text
            color={useColorModeValue("gray.800", "whiteAlpha.900")}
            fontWeight="600"
            ml={3}
          >
            Po-Cheng Yeh
          </Text>
        </LogoBox>
    </Link>
  );
};

export default Logo;
