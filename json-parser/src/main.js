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
      case /\[|\]/.test(current):
        return arrParser();
      case /\{/.test(current):
        return objParser();
      case /^\d+$/.test(current):
        return numParser();
      case /^null/.test(string.slice(index)):
        return nullParser();
      case /^true|^false/.test(string.slice(index)):
        return boolParser();
      //catch error
      default:
        return "Invalid JSON input";
    }
  }
  const objParser = () => {
    const obj = {};
    let key;
    let value;
    let depth = 0;

    if (current === '{') {
      depth += 1;
      nextChar();
    }
    while (depth) {
      if (current === '}') {
        depth -= 1;
        nextChar();
      } else if (!key) {
        key = charChecker();
      } else if (current === ':') {
        nextChar();
        value = charChecker();
        obj[key] = value;
      } else if (current === ',') {
        key = undefined;
        nextChar();
      }
    }
    return obj;
  }

  const numParser = () => {
    let num = '';

    while (Number.isInteger(Number.parseInt(current))) {
      num = num + current;
      nextChar();
    }
    return Number.parseInt(num);
  }

  const arrParser = () => {
    let depth = 0;
    const arr = [];

    if (current === '[') {
      depth += 1;
      nextChar();
    }
    while (depth) {
      if (current === ',') {
        nextChar();
        arr.push(charChecker())
      } else if (current === ']') {
        depth -= 1;
        nextChar();
      } else {
        arr.push(charChecker())
      }
    }
    return arr;
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

  const boolParser = () => {
    if (current === 't') {
      let val = '';
      while (val !== 'true') {
        val += current;
        nextChar();
      }
      return true;
    }
    if (current === 'f') {
      let val = '';
      while (val !== 'false') {
        val += current;
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