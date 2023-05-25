import styled from "styled-components";
import { variant } from "styled-system";

export const TitleSt = styled.h1`
  color: #22305c;
  font-size: 48px;
  line-height: 1;
  font-weight: 400;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 20px;
`;

export const TitleEl = styled(TitleSt)(
  variant({
    variants: {
      primary: {
        color: "#22305c",
      },
      secondary: {
        color: "mainText",
      },
    },
  })
);
