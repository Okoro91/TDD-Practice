const caesarCipher = (str, shift) => {
  const shiftChar = (char, base) => {
    const charCode = char.charCodeAt(0);
    return String.fromCharCode(((charCode - base + shift) % 26) + base);
  };

  let result = "";

  for (let char of str) {
    if (char >= "a" && char <= "z") {
      result += shiftChar(char, "a".charCodeAt(0));
    } else if (char >= "A" && char <= "Z") {
      result += shiftChar(char, "A".charCodeAt(0));
    } else {
      result += char;
    }
  }

  return result;
};

export default caesarCipher;
