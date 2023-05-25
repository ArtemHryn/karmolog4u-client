"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import { useTranslation } from "react-i18next";
import {
  BurgerBtn,
  BurgerIcon,
  Container,
  Menu,
  SelectLang,
} from "./Header.styled";
import MobileHeader from "./MobileHeader/MobileHeader";
import PersonalNav from "./PersonalNav";
import { Box } from "@components/Box";
import DesktopNav from "./DesktopNav";

export const Header = () => {
  const [showMenu, setshowMenu] = useState(false);
  const { i18n } = useTranslation()
  return (
    <Menu>
      <Container>
        <BurgerBtn onClick={() => setshowMenu(true)}>
          <BurgerIcon />
        </BurgerBtn>
        <AnimatePresence mode="wait" onExitComplete={() => null}>
          {showMenu && (
            <MobileHeader setshowMenu={setshowMenu} showMenu={showMenu} />
          )}
        </AnimatePresence>
        <DesktopNav />
        <Box display="flex">
          <PersonalNav />
          <SelectLang
            onChange={(e) => {
              i18n.changeLanguage(e.target.value.toLowerCase());
            }}
          >
            <option>UA</option>
            <option>RU</option>
          </SelectLang>
        </Box>
      </Container>
    </Menu>
  );
};
