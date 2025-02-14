export function findMostFrequentChar(str: string): string {
    if (!str) return "";

    const charCount: Record<string, number> = {};
    let maxChar = "";
    let maxCount = 0;

    for (const char of str) {
      charCount[char] = (charCount[char] || 0) + 1;
      if (charCount[char] > maxCount) {
        maxChar = char;
        maxCount = charCount[char];
      }
    }

    return maxChar;
  }
