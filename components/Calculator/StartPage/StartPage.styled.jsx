import styled from "styled-components";
import Link from "next/link";

export const FreeCalc = styled.p`
  color: #22305c;
  font-size: 18px;
  line-height: 1.18;
  font-weight: 400;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 20px;
`;

export const CalcNavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

export const CalcLink = styled(Link)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 45px;
  color: #ffffff;
  font-size: 12px;
  line-height: 1.55;
  font-weight: 300;
  text-transform: uppercase;
  background-color: #556390;
  text-align: center;
`;

export const Info = styled.em`
  color: #22305c;
  font-size: 9px;
  line-height: 1.18;
  font-weight: 400;
  text-align: center;
`;
