function checkBrackets(str) {
  const openBrackets = new Set(["(", "{", "["]);
  const closeBrackets = new Set([")", "}", "]"])
  const bracketsPairs = {
    ")": "(",
    "}": "{",
    "]" : "[",
  };

  let stack = [];

  for (const char of str) {
    if (openBrackets.has(char)) 
    {
      stack.push(char);
    } 
    else if (closeBrackets.has(char)) 
    {
      if(stack.length === 0)
        return false;

      if(bracketsPairs[char] != stack.pop())
        return false;
    }
  }

  return stack.length === 0;
};

const someFn = `
function foo() {
  () => {
    {}
  }
}
`;

const someFn1 =  `
function foo() {
  () => {
    {}
  }
}}
`;

console.log(checkBrackets(someFn));
console.log(checkBrackets(someFn1));