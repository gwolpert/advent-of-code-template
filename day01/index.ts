export const p1 = (input: string): number => {
  const lines = input.split('\n').map(Number)
  let ans = 0;
  lines.reduce((prev: number, curr: number): number => {
    if (prev && prev < curr) ans++;
    return curr;
  })
  return ans;
}

export const p2 = (input: string): number => {
  const lines = input.split('\n').map(Number)
  let ans = 0;
  lines.map((x, i) =>  x + lines[i + 1] + lines[i + 2]).reduce((prev: number, curr: number): number => {
    if (prev && prev < curr) ans++;
    return curr;
  })
  return ans;
}
