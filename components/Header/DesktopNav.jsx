import Image from "next/image";
import { Logo, NavigationLink, NavigationList } from "./Header.styled";
import { Box } from "@components/Box";
import { useTranslation } from "react-i18next";

const DesktopNav = () => {
  const { t } = useTranslation();
  const nav = t("navList");
  console.log(JSON.parse(nav));
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
        {JSON.parse(nav).map(({ name, href }) => (
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
