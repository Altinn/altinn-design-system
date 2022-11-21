// Checks if content of arrays is equal
export function arraysEqual<T>(array1?: T[], array2?: T[]): boolean {
  if (array1 === array2) return true;
  if (array1 === undefined || array2 === undefined) return false;
  if (array1.length !== array2.length) return false;
  for (const i in array1) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
}
