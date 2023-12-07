import './App.css';
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

function Numbers (props){
  const nums = Array.from(Array(10).keys()).map(
    number => {
      return <Button 
      onClick={(e) =>{
        if (props.data !="0") props.onClick(props.data + e.target.innerHTML)
        else props.onClick(e.target.innerHTML)
      }
    }
    key={number} w="40px" h="40px" m="4px">
      {number}
    </Button>
    })
    return(
      <Box display="flex" flexWrap="wrap" w="150px">{nums}</Box>
    )
}

function CountButton (props){
  const expressions = /\+|\-|\/|\*|/
  const lastNumber = props.data[props.data.length - 1]
  function checkExpressionType(){
    if (expressions.test(lastNumber)) return
    props.onClick(props.data + props.expressions)
  }
  return(
    <Button bg="#00C0F9" m="4px" onClick={()=>{checkExpressionType()}}>
      {props.expressions}
    </Button>
  )
}

function App(){
  const [counts, setCounts] = useState(0);
  const [result, setResult] = useState('');
  function applyExpressiopn (countedNumber){
    setCounts(countedNumber)
    setResult(eval(counts))
  }
  return (
    <div className="App" >
      <Flex display="flex" flexDirection="column" justifyContent="center" alignItems="center" h="100vh">
        <Flex gap="5px" flexDirection="column" justifyContent="center" alignItems="center" w="200px">
          <InputVCalc/>
          <Flex w="100%" justifyContent="space-between" alignItems="center" bg="red" borderRadius="8px">
            <Text display="flex" justifyContent="start" alignItems="center" w="fit-content" h="38px" px="16px">
              {counts}
            </Text>
            <Text display="flex" justifyContent="start" alignItems="center" w="fit-content" h="38px" px="16px" textColor="red">
              {result}
            </Text>
          </Flex>
          <Flex>
          <Numbers data={counts} onClick={setCounts} />
          <Flex flexDirection="column">
            <CountButton data={counts} expressions={'+'} onClick={applyExpressiopn} />
            <CountButton data={counts} expressions={'-'} onClick={applyExpressiopn} />
            <CountButton data={counts} expressions={'*'} onClick={applyExpressiopn} />
            <CountButton data={counts} expressions={'/'} onClick={applyExpressiopn} />
          </Flex>
          <Button dg="red" m="4px" onClick={()=> {setResult(eval(counts))}}>
            =
          </Button>
      </Flex>
      </Flex>
      </Flex>
    </div>
  );
}
export default App;