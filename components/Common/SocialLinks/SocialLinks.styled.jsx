import Link from "next/link";
import styled from "styled-components";

export const SocialList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 12px;
  @media screen and (min-width: ${(p) => p.theme.sizes.desktop}) {
    gap: 18px;
  }
`;

export const SocialLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${(p) => p.theme.colors.mainText};
  @media screen and (min-width: ${(p) => p.theme.sizes.desktop}) {
    width: 42px;
    height: 42px;
  }
`;
