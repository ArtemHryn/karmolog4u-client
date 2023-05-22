import styled from "styled-components";
import Link from "next/link";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { motion } from "framer-motion";
import { Select } from "theme-ui";
import { flexbox } from "styled-system";

export const Menu = styled.header`
  display: flex;
  z-index: 100;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 70px;
  background-color: ${(p) => p.theme.colors.main};
  @media screen and (min-width: ${(p) => p.theme.sizes.desktop}) {
    height: 110px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${(p) => p.theme.sizes.mobile};
  @media screen and (min-width: ${(p) => p.theme.sizes.tablet}) {
    max-width: ${(p) => p.theme.sizes.tablet};
  }
  @media screen and (min-width: ${(p) => p.theme.sizes.desktop}) {
    max-width: ${(p) => p.theme.sizes.desktop};
  }
`;

export const SelectLang = styled(Select)`
  width: 75px !important;
  color: ${(p) => p.theme.colors.mainText} !important;
  background-color: ${(p) => p.theme.colors.main};
  border-color: transparent !important;
  font-size: 18px !important;
`;

export const Personalnav = styled.ul`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-right: 8px;
`;

export const PersonalLink = styled(Link)`
  padding: 5px;
`;
export const PersonalIcon = styled.svg`
  height: 30px;
  width: 30px;
  color: ${(p) => p.theme.colors.mainText};
  @media screen and (min-width: ${(p) => p.theme.sizes.tablet}) {
    height: 35px;
    width: 35px;
  }
`;
//mobile navigation
export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
`;
export const MobNav = styled(motion.nav)`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 40vw;
  min-width: 320px;
  padding: 42px 25px;
  background-color: ${(p) => p.theme.colors.main};
`;

export const Logo = styled(Link)`
  margin-bottom: 22px;
  cursor: pointer;
  @media screen and (min-width: ${(p) => p.theme.sizes.desktop}) {
    width: 80px;
    margin-right: 50px;
    margin-bottom: 0;
  }
`;

export const BurgerBtn = styled.button`
  background-color: transparent;
  width: 50px;
  height: 40px;
  @media screen and (min-width: ${(p) => p.theme.sizes.tablet}) {
    width: 70px;
    height: 50px;
  }
  @media screen and (min-width: ${(p) => p.theme.sizes.desktop}) {
    display: none;
  }
`;
export const BurgerIcon = styled(RxHamburgerMenu)`
  background-color: transparent;
  width: 50px;
  height: 40px;
  color: ${(p) => p.theme.colors.mainText};
  @media screen and (min-width: ${(p) => p.theme.sizes.tablet}) {
    width: 70px;
    height: 50px;
  }
`;

export const CloseIcon = styled(RxCross1)`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 26px;
  height: 26px;
  color: ${(p) => p.theme.colors.mainText};
`;

export const NavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  ${flexbox}
`;

export const NavigationLink = styled(Link)`
  font-family: "FuturaPT";
  text-transform: uppercase;
  font-weight: 500;
  color: ${(p) => p.theme.colors.mainText};
  font-size: 16px;
  line-height: 0.03em;
  letter-spacing: 1.8;
  margin-bottom: 14px;
  @media screen and (min-width: ${(p) => p.theme.sizes.tablet}) {
    font-size: 18px;
    margin-bottom: 16px;
  }
  @media screen and (min-width: ${(p) => p.theme.sizes.desktop}) {
    font-size: 20px;
    margin-bottom: 0;
  }
`;
