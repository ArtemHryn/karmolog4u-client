import Image from "next/image";
import { Logo, NavigationLink, NavigationList } from "./Header.styled";
import { Box } from "@components/Box";

import { navigationList } from "@helper/navigationList";

const DesktopNav = () => {
  return (
    <Box
      display={["none", "none", "flex"]}
      mr="auto"
      alignItems="center"
      flex="2"
      justifyContent="space-evenly"
    >
      <Logo href="/" onClick={() => setshowMenu(false)}>
        <Image
          src={"/assets/images/Vector.png"}
          alt="Logo"
          width={80}
          height={80}
          priority
        />
      </Logo>
      <NavigationList flexDirection="row">
        {navigationList.map(({ name, href }) => (
          <li key={name}>
            <NavigationLink href={href} onClick={() => setshowMenu(false)}>
              {name}
            </NavigationLink>
          </li>
        ))}
      </NavigationList>
    </Box>
  );
};

export default DesktopNav;
