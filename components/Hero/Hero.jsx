"use client";
import Container from "@components/Common/Container";
import { ArrowDownLink, ArrowIcon, AuthorName, HeroDesc } from "./Hero.styled";
import { cormorant, arial } from "@app/layout";
import { Box } from "@components/Box";

const Hero = () => {
  return (
    <Container
      pt={["300px", "350px", "500px"]}
      pb={["20px", "40px"]}
      pys={["0px", "0px", "0px"]}
      bi={['/assets/images/Hero/Sergiy.png',"/assets/images/Hero/SergiyDesk.webp"]}
    >
      <Box display={[null, null, "flex"]} justifyContent="space-between">
        <AuthorName className={cormorant.className}>
          Сергій{" "}
          <AuthorName
            as="p"
            className={cormorant.className}
            display={[null, null, "none"]}
          >
            Скляренко
          </AuthorName>
        </AuthorName>
        <Box display={["none", "none", "block"]}>
          <HeroDesc mb={["10px"]} className={arial.className}>
            Я створив для вас простір енергетичної сили, де ви зможете знайти
            дієві інструменти та отримати підтримку на шляху до особистої
            гармонії
          </HeroDesc>
          <HeroDesc className={arial.className}>
            З любов&#39;ю та служінням до вас!
          </HeroDesc>
        </Box>
      </Box>
      <Box display={[null, null, "none"]}>
        <HeroDesc mb={["10px"]} className={arial.className}>
          Я створив для вас простір енергетичної сили, де ви зможете знайти
          дієві інструменти та отримати підтримку на шляху до особистої гармонії
        </HeroDesc>
        <HeroDesc className={arial.className}>
          З любов&#39;ю та служінням до вас!
        </HeroDesc>
      </Box>
      <AuthorName
        as="p"
        className={cormorant.className}
        display={["none", "none", "block"]}
      >
        Скляренко
      </AuthorName>
      <ArrowDownLink href="#about">
        <ArrowIcon width="82" height="82" />
      </ArrowDownLink>

    </Container>
  );
};

export default Hero;
