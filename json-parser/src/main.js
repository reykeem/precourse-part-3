function JSONParser(string) {
  let str = string.slice();
  let index = 0;
  let current = str[index];
  // helper function to move pointer to next character in string
  const nextChar = () => {
    index += 1;
    current = str[index];
  }
  //switch statement to check if char matches special conditions
  const charChecker = () => {
    switch (true) {
      case /\'|\"/.test(current):
        return "strParser(strArr)";

      case /\[/.test(string):
        return "arrParser(str)";

      case /\{/.test(string):
        return "objParser(str)";

      case /^\d+$/.test(string):
        return numParser(string);

      case /null/.test(string):
        return nullParser(string);

      case /true|false/.test(string):
        return boolParser(string);
      //throw undefined
      default:
        return "UNDEFINED";
    }
  }
  const numParser = (str) => {
    let num = '';
    while (Number.isInteger(Number.parseInt(current))) {
      num = num + current;
      nextChar();
    }
    return Number.parseInt(num);
  }

  const strParser = (str) => {

  }

  const arrParser = (str) => {

  }

  const objParser = (str) => {

  }

  const boolParser = (string) => {
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

  const nullParser = (string) => {
    let val = '';
    while (val !== 'null') {
      val = val + current;
      nextChar();
    }
    return null;
  }
}

