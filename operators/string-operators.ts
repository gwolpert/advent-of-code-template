import { map, Observable } from 'rxjs';

/**
 * Splits a string into an array of strings based on the amount of newline-characters.
 * @param length The amount of newline characters between each row.
 */
export const splitRows = (length = 1) => (source: Observable<string>) =>
	source.pipe(
		map((input): string[] => input.trim().split(new RegExp(`\\n{${length}}`))),
	);

/**
 * Returns an array of matches from the string.
 * @param regex The regular expression to match.
 * @param mapFn A function that maps the matches to a new value.
 */
export const matchMap = <T>(regex: RegExp, mapFn: (match: RegExpMatchArray) => T) => (source: Observable<string>) =>
	source.pipe(
		map((input) => [...input.matchAll(regex)].map(mapFn)),
	);
