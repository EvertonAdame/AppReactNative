import React, { useState, useEffect } from "react";
import { Text } from "react-native-elements";
import CustomHeader from "./CustomHeader";
import { ContainerDrawer } from "./CustomDrawerStyles";
import CustomBody from "./CustomBody";
import Logout from "./Logout";

const CustomDrawer = () => {
  return (
    <>
      <CustomHeader />
      <ContainerDrawer>
        <CustomBody />
        <Logout />
      </ContainerDrawer>
    </>
  );
};

export default CustomDrawer;
