const isBalancedBracket = (str) => {
  const stack = [];
  const brackets = { "(": ")", "[": "]", "{": "}" };

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (brackets[char]) {
      stack.push(char);
    } else {
      const lastBracket = stack.pop();
      if (brackets[lastBracket] !== char) {
        return "NO";
      }
    }
  }
  return stack.length === 0 ? "YES" : "NO";
};

const testString1 = "{[()]}";
const testString2 = "[(])";
console.log(isBalancedBracket(testString1));
console.log(isBalancedBracket(testString2));
