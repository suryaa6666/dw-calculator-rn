import React from "react";
import { Text, useTheme } from "native-base";

function Calculator() {

  const theme = useTheme();

  return <Text color={theme.colors.primary["300"]}> Calculator </Text>;
}

export default Calculator;
