export const p1 = (input: string): number => countIncreases(input.split('\n').map(Number));

export const p2 = (input: string): number => {
  const lines = input.split('\n').map(Number);
  return countIncreases(lines.map((x, i) =>  x + lines[i + 1] + lines[i + 2]));
}

const countIncreases = (lines: number[]): number => {
  let ans = 0;
  lines.reduce((prev: number, curr: number): number => {
    if (prev && prev < curr) ans++;
    return curr;
  })
  return ans;
}
