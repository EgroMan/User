import { Box, Text, Button, Input, Flex } from '@chakra-ui/react';
import { useState } from 'react';

function InputVCalc (props) {
  const [result, setResult] = useState('')

  function updateCounts (e) {
    const expressions = /\+|\-|\/|\*|=| [A-z]|/
    const lastNumber = e.target.value[e.target.value.length - 1]
    if(expressions.test(lastNumber))
    return
  else setResult(eval(e.target.value))
  }
  return(
    <Flex justifyContent="center" alignItems="center" border="2px" borderRadius="8px" borderColor="gray.50">
      <Input border="transparent" type="text" onClick={(e)=> {updateCounts(e)}}/>
      <Text textColor="red" px="8px">{result}</Text>
    </Flex>
    
  )
};

export default InputVCalc;
