import { Box } from "@components/Box";
import React from "react";

const Container = ({ children, pys = null, bi, ...props }) => {
  return (
    <Box
      as="section"
      py={pys ? pys : ["40px", "40px", "90px"]}
      position="relative"
      backgroundImage={[`url('${bi}')`]}
      backgroundPosition="right top"
      backgroundRepeat="no-repeat"
      backgroundSize={"cover"}
    >
      <Box
        maxWidth={["320px", "768px", "1440px"]}
        px={["60px", "33px", "100px"]}
        m="0 auto"
        {...props}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Container;
