import React, { useState, useEffect } from "react";
import { Text } from "react-native-elements";
import CustomName from "./CustomName";
import { ContainerDrawer } from "./CustomDrawerStyles";
import CustomEmail from "./CustomEmail";
import Logout from './Logout';

const CustomDrawer = () => {
  return (
    <ContainerDrawer>
       <CustomName/>
       <CustomEmail />
      <Logout />
    </ContainerDrawer>
  );
};

export default CustomDrawer;
