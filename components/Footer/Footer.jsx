import Link from "next/link";
import React from "react";

import { Box } from "@components/Box";
import SocialLinks from "@components/Common/SocialLinks/SocialLinks";
import {
  FooterLink,
  FooterTitle,
  FullName,
  FullNameSpan,
} from "./Footer.styled";
import { arimo } from "@app/layout";

const Footer = () => {
  return (
    <Box as="footer" bg="main" py={["42px", "40px", "70px"]}>
      <Box
        maxWidth={["320px", "768px", "1440px"]}
        px={["30px", "40px", "70px"]}
        m="0 auto"
        display="flex"
        flexDirection="column"
      >
        <Box m="0 auto 30px">
          <FooterTitle className={arimo.className}>
            студія трансформації
          </FooterTitle>
          <FullName className={arimo.className}>
            <FullNameSpan>Сергія Скляренка</FullNameSpan>
          </FullName>
        </Box>
        <Box mb={["30px"]} display={[null, "none"]}>
          <SocialLinks />
        </Box>
        <Box
          display="flex"
          flexDirection={["column", "row"]}
          justifyContent="space-between"
          alignItems={[null, "flex-start"]}
        >
          <Box mb={"30px"}>
            <FooterLink href="policy" className={arimo.className}>
              Політика конфіденційності
            </FooterLink>
            <FooterLink href="offer" className={arimo.className}>
              Договір публічної оферти
            </FooterLink>
          </Box>
          <Box display={["none", "block"]}>
            <SocialLinks />
          </Box>
          <Box>
            <FooterLink href="karmolog4u@gmail.com" className={arimo.className}>
              karmolog4u@gmail.com
            </FooterLink>
            <FooterLink as="p" className={arimo.className}>
              &copy; 2023. All Rights Reserved
            </FooterLink>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
