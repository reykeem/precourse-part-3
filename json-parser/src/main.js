function JSONParser(string) {
  let index = 0;
  let current = string[index];
  // helper function to move pointer to next character in string
  const nextChar = () => {
    index += 1;
    current = string[index];
  }
  //switch statement to check if char matches special conditions
  const charChecker = () => {
    switch (true) {
      case /\'|\"/.test(current):
        return strParser();

      case /\[/.test(current):
        return "arrParser(str)";

      case /\{/.test(current):
        return "objParser(str)";

      case /^\d+$/.test(current):
        //returns NaN when return value of numParser() not assigned to variable, why?
        let numero = numParser();
        return numero;

      case /null/.test(string):
        return nullParser();

      case /true|false/.test(string):
        return boolParser();
      //throw undefined
      default:
        return "ALTAI'S UNDEFINED";
    }
  }
  const numParser = () => {
    let num = '';
    while (Number.isInteger(Number.parseInt(current))) {
      num = num + current;
      nextChar();
    }
    return Number.parseInt(num);
  }

  const strParser = () => {
    let str = '';
    nextChar();
    while (!(/\'|\"/.test(current)) || current === '\\') {
      if (current === '\\') {
        nextChar();
        str += current;
        nextChar();
      } else {
        str += current;
        nextChar();
      }
    }
    nextChar();
    return str;
  }

  const arrParser = (str) => {

  }

  const objParser = (str) => {

  }

  const boolParser = () => {
    if (current === 't') {
      while (current !== 'e') {
        nextChar();
      }
      return true;
    } else {
      while (current !== 'e') {
        nextChar();
      }
      return false;
    }
  }

  const nullParser = () => {
    let val = '';
    while (val !== 'null') {
      val += current;
      nextChar();
    }
    return null;
  }

  return charChecker();
}

