import { last, map, type Observable as $, scan } from 'rxjs';

/**
 * Sums all the numbers in the array
 */
export const sum = () => (source: $<number>) =>
	source.pipe(
		scan((acc, curr) => acc + +curr, 0),
		last(),
	);

/**
 * Multiplies all the numbers in the array
 */
export const product = () => (source: $<number>) =>
	source.pipe(
		scan((acc, curr) => acc * curr, 1),
		last(),
	);

/**
 * Returns the highest number in the array
 */
export const max = () => (source: $<number>) =>
	source.pipe(
		scan((acc, curr) => acc > curr ? acc : curr, Number.MIN_SAFE_INTEGER),
		last(),
	);

/**
 * Returns the lowest number in the array
 */
export const min = () => (source: $<number>) =>
	source.pipe(
		scan((acc, curr) => acc < curr ? acc : curr, Number.MAX_SAFE_INTEGER),
		last(),
	);

/**
 * Returns the average of all the numbers in the array
 */
export const avg = () => (source: $<number>) =>
	source.pipe(
		scan(([sum, count], curr) => [sum + curr, count + 1], [0, 0]),
		last(),
		map(([sum, count]) => sum / count),
	);

/**
 * Sorts the array numerically
 */
export const sortNums = () => (source: $<number>) =>
	source.pipe(
		scan((acc, curr) => [...acc, curr], new Array<number>()),
		last(),
		map((input) => input.sort((a, b) => a - b)),
	);

/**
 * Count the amount of elements which match the predicate
 * @param predicate The predicate to match
 */
export const count = <T>(predicate?: (item: T) => boolean) => (source: $<T>) =>
	source.pipe(
		scan((acc, curr) => acc + (predicate ? +predicate(curr) : 1), 0),
		last(),
	);
