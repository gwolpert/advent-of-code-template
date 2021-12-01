import { ensureDir } from "https://deno.land/std@0.116.0/fs/ensure_dir.ts";
import { brightYellow, underline, brightBlue } from 'https://deno.land/std@0.116.0/fmt/colors.ts';

const [ cmd, dayNumber, partNumber ] = Deno.args;
const day = String(+dayNumber).padStart(2, '0');

switch(cmd) {
  case 'run': {
    const file = await import(`./day${day}/index.ts`);
    const input = (await Deno.readTextFile(`./day${day}/input.txt`) || '');
    const runningDay = `${brightBlue('Running day')} ${brightYellow(dayNumber)} ${brightBlue('part')}`;
    if (!partNumber || +partNumber === 1) {
      console.log(underline(`${runningDay} ${brightYellow('1')}`));
      console.log(`${brightYellow('[Answer]')} ${file.p1(input)}`);
    }
    if (!partNumber || +partNumber === 2) {
      console.log(underline(`${runningDay} ${brightYellow('2')}`));
      console.log(`${brightYellow('[Answer]')} ${file.p2(input)}`);
    }
    break;
  }
  case 'create': {
    console.log('running create')
    const template = await Deno.readTextFile('./template.ts.tmpl');
    await ensureDir(`./day${day}`);
    await Deno.writeTextFile(`./day${day}/index.ts`, template);
    await Deno.writeTextFile(`./day${day}/input.txt`, '');
    break;
  }
  default: {
    throw new Error('Command not found');
  }
}