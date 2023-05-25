import { TitleEl } from "./Title.styles";

const Title = ({ children, ...props }) => {
  return <TitleEl {...props}>{children}</TitleEl>;
};

export default Title;
