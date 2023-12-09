import { Box, Text, Button, Input, Flex } from '@chakra-ui/react';
import { useState } from 'react';
import ClickCalc from './ClickCalc';
import InputCalc from './InputCalc';
import CountButton from './CountButton';

function Calculator() {
  const [calcType, setCalcType] = useState('ClickCalc')
  let calculator;
  switch (calcType) {
    case 'ClickCalc': calculator = <ClickCalc />; break;
    case 'InputCalc': calculator = <InputCalc />; break;
    default: calculator = <ClickCalc />
  }

  return (
    <Box display="flex" flexDirection="column" justifyContent="center" m="10px">
      <Box>
      </Box>
      <Box m="10px">
        {calculator}
      </Box>
    </Box>
  );
}
export default Calculator;