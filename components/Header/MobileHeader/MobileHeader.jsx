import {
  Backdrop,
  CloseIcon,
  Logo,
  MobNav,
  NavigationLink,
  NavigationList,
} from "../Header.styled";
import { navigationList } from "@helper/navigationList";
import Image from "next/image";
import { Box } from "@components/Box";
import SocialLinks from "@components/Common/SocialLinks/SocialLinks";

const animation = {
  initial: {
    x: "-100%",
  },
  animate: {
    x: "0",
    transition: { type: "spring", duration: 0.6 },
  },
  exit: {
    x: "-100%",
    transition: {
      duration: 0.6,
      type: "spring",
    },
  },
};

const MobileHeader = ({ setshowMenu }) => {
  const onCLoseMenu = (e) => {
    if (e.target === e.currentTarget) {
      setshowMenu(false);
      return;
    }
  };
  return (
    <Backdrop onClick={onCLoseMenu}>
      <MobNav
        initial={animation.initial}
        animate={animation.animate}
        exit={animation.exit}
      >
        <CloseIcon
          onClick={() => {
            setshowMenu(false);
          }}
        />
        <Box>
          <Logo href="/" onClick={() => setshowMenu(false)}>
            <Image
              src={"/assets/images/Vector.png"}
              alt="Logo"
              width={80}
              height={80}
            />
          </Logo>
          <NavigationList>
            {navigationList.map(({ name, href }) => (
              <li key={name}>
                <NavigationLink href={href} onClick={() => setshowMenu(false)}>
                  {name}
                </NavigationLink>
              </li>
            ))}
            <li>
              <NavigationLink href="cabinet" onClick={() => setshowMenu(false)}>
                Особистий кабінет
              </NavigationLink>
            </li>
          </NavigationList>
        </Box>
        <Box>
          <SocialLinks />
        </Box>
      </MobNav>
    </Backdrop>
  );
};

export default MobileHeader;
