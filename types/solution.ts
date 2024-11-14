import type { Observable } from 'rxjs';

export type Solution = (input: Observable<string>) => Observable<number>;
