"use client";
import { cormorant } from "@app/layout";
import Container from "@components/Common/Container";
import { CalcLink, CalcNavList, FreeCalc, Info } from "./StartPage.styled";
import Title from "@components/Common/Title/Title";

const StartPage = () => {
  return (
    <Container
      pys={["0px", "0px", "0px"]}
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <FreeCalc className={cormorant.className}>
        безкоштовний калькулятор
      </FreeCalc>
      <Title className={cormorant.className}>матриці долі</Title>
      <CalcNavList>
        <li>
          <CalcLink href="personal-matrix" className={cormorant.className}>
            розрахувати особисту матрицю
          </CalcLink>
        </li>
        <li>
          <CalcLink href="partner-matrix" className={cormorant.className}>
            розрахувати матрицю сумісності
          </CalcLink>
        </li>
      </CalcNavList>
      <Info className={cormorant.className}>
        ❋ Калькулятор на 100% відповідає класичному обчисленню «Матриці Долі»
        Наталії Ладіні
      </Info>
    </Container>
  );
};

export default StartPage;
