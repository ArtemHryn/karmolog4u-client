import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { PersonalIcon, PersonalLink, Personalnav } from "./Header.styled";

const PersonalNav = () => {
  return (
    <Personalnav>
      <PersonalLink href="cabinet">
        {" "}
        <PersonalIcon as={IoPersonOutline} />
      </PersonalLink>
      <PersonalLink href="basket">
        <PersonalIcon as={AiOutlineShoppingCart} />
      </PersonalLink>
    </Personalnav>
  );
};

export default PersonalNav;
