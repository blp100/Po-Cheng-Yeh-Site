import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 1.1rem;
  display: inline-flex;
  align-items: center;
  height: 1.75rem
  line-height: 1.5rem;
  padding: 10px;

  &:hover img{
    transform: rotate(60deg);
  }
`;

const Logo = () => {
  const imagePath = `/images/leaf-solid.svg`;

  return (
    <Link href="/">
        <LogoBox>
          <Image src={imagePath} height={20} width={20} alt="Logo" />
          <Text
            color={useColorModeValue("gray.800", "whiteAlpha.900")}
            fontWeight="bold"
            marginLeft={3}
          >
            Po-Cheng Yeh
          </Text>
        </LogoBox>
    </Link>
  );
};

export default Logo;
