import React from "react";
import { MantineProvider } from "@mantine/core";

const MantineLayout = (props) => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      {props.children}
    </MantineProvider>
  );
};

export default MantineLayout;
