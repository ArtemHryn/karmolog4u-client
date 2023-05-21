import styled from "styled-components";
import Link from "next/link";

export const FooterTitle = styled.h2`
  font-weight: 400;
  font-size: 17px;
  line-height: 1.8;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  text-align: center;
  color: ${(p) => p.theme.colors.link};
  @media screen and (min-width: ${(p) => p.theme.sizes.tablet}) {
    font-size: 22px;
  }
  @media screen and (min-width: ${(p) => p.theme.sizes.tablet}) {
    font-size: 26px;
  }
`;

export const FullName = styled.p`
  position: relative;
  text-align: center;
  &::before {
    content: "";
    position: absolute;
    left: 0px;
    right: 0px;
    top: calc(50% - 1px);
    border-top: 1px solid ${(p) => p.theme.colors.link};
  }
`;

export const FullNameSpan = styled.span`
  position: relative;
  z-index: 2;
  font-weight: 400;
  font-size: 13px;
  line-height: 1.8;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  background-color: ${(p) => p.theme.colors.main};

  color: ${(p) => p.theme.colors.link};
  padding: 0 5px;
  @media screen and (min-width: ${(p) => p.theme.sizes.tablet}) {
    font-size: 17px;
  }
`;

export const FooterLink = styled(Link)`
  font-weight: 400;
  font-size: 11px;
  line-height: 20px;

  text-align: center;

  color: ${(p) => p.theme.colors.link};
  cursor: pointer;
  @media screen and (min-width: ${(p) => p.theme.sizes.tablet}) {
    font-size: 13px;
    text-align: left;
    margin-bottom: 10px;
  }
  @media screen and (min-width: ${(p) => p.theme.sizes.tablet}) {
    font-size: 16px;
  }
`;
