"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

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
          <SelectLang onChange={() => {}}>
            <option>UA</option>
            <option>RU</option>
          </SelectLang>
        </Box>
      </Container>
    </Menu>
  );
};
