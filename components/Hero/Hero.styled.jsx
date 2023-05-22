import Link from "next/link";
import styled, { keyframes } from "styled-components";
import { layout, space } from "styled-system";
import { BsArrowDown } from "react-icons/bs";

export const scrollDownArrowAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const AuthorName = styled.h2`
  font-weight: 400;
  font-size: 36px;
  line-height: 0.88;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  color: #f4f3f1;
  margin-bottom: 15px;

  @media screen and (min-width: ${(p) => p.theme.sizes.tablet}) {
    margin-bottom: 25px;
    font-size: 110px;
  }
  ${layout}
`;

export const HeroDesc = styled.p`
  font-weight: 300;
  font-size: 11px;
  line-height: 1;
  color: ${(p) => p.theme.colors.mainText};
  ${space}
  @media screen and (min-width: ${(p) => p.theme.sizes.tablet}) {
    font-size: 15px;
    margin-left: auto;
    max-width: 400px;
  }
  @media screen and (min-width: ${(p) => p.theme.sizes.tablet}) {
    text-align: right;
  }
  ${layout}
`;

export const ArrowDownLink = styled(Link)`
  display: block;
  text-align: center;
  color: ${(p) => p.theme.colors.mainText};
  animation: ${scrollDownArrowAnimation} 2.5s infinite;
`;

export const ArrowIcon = styled(BsArrowDown)`
  width: 20px;
  height: 20px;
  @media screen and (min-width: ${(p) => p.theme.sizes.tablet}) {
    width: 40px;
    height: 40px;
  }
`;
