import { map, Observable } from 'rxjs';

/**
 * Sums all the numbers in the array
 */
export const sum = () => (source: Observable<Array<number>>) => source.pipe(
    map((input) => input.reduce((acc, curr) => acc + +curr, 0))
);

/**
 * Returns the highest number in the array
 */
export const max = () => (source: Observable<Array<number>>) => source.pipe(
    map((input) => Math.max(...input))
);

/**
 * Returns the lowest number in the array
 */
export const min = () => (source: Observable<Array<number>>) => source.pipe(
    map((input) => Math.min(...input))
);

/**
 * Returns the average of all the numbers in the array
 */
export const avg = () => (source: Observable<Array<number>>) => source.pipe(
    map((input) => input.reduce((acc, curr) => acc + +curr, 0) / input.length)
);

/**
 * Sorts the array numerically
 */
export const sortNums = () => (source: Observable<Array<number>>) => source.pipe(
    map((input) => input.sort((a, b) => a - b))
);

/**
 * Count the amount of elements which match the predicate
 * @param predicate The predicate to match
 */
export const count = <T>(predicate?: (item: T) => boolean) => (source: Observable<Array<T>>) => source.pipe(
    map((input) => predicate ? input.filter(predicate).length : input.length)
);

/**
 * Reduces the array to a single value
 * @param reducer The reducer function
 * @param initialValue The initial value
 */
export const reduceMap = <TIn, TOut>(reducer: (acc: TOut, curr: TIn) => TOut, initialValue: TOut) => (source: Observable<Array<TIn>>) => source.pipe(
    map((input) => input.reduce(reducer, initialValue))
);
