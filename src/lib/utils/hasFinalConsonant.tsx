export const hasFinalConsonant = (word: string) => {
  const lastCharCode = word.charCodeAt(word.length - 1);
  return (
    lastCharCode >= 0xac00 &&
    lastCharCode <= 0xd7a3 &&
    (lastCharCode - 0xac00) % 28 !== 0
  );
};
