import { concatMap, last, map, of, scan, tap, type Observable as $ } from 'rxjs';

/**
 * Splits a string into an array of strings based on the amount of newline-characters.
 * @param length The amount of newline characters between each row.
 */
export const splitRows = (length = 1) => (source: $<string>) =>
	source.pipe(
		concatMap((input): string[] => input.trim().split(new RegExp(`\\n{${length}}`))),
	);

export const match = (regex: RegExp) => (source: $<string>) =>
	source.pipe(
		map((input) => input.matchAll(regex)),
	);

export const matchMap = <T = string>(regex: RegExp, mapFn: (match: RegExpExecArray) => T) => (source: $<string>) =>
	source.pipe(
		match(regex),
		map((matches) => [...matches.map(mapFn)]),
	);
