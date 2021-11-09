import { map, range, fromEvent, pluck, mapTo } from 'rxjs';

// range(1, 5)
//    .pipe(map<number, number>((val) => val * 10))
//    .subscribe(console.log);

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyupCode$ = keyUp$.pipe(map((e) => e.code));
// const keyupPluck$ = keyUp$.pipe(pluck('key'));
const keyupPluck$ = keyUp$.pipe(pluck('target', 'baseURI'));
const keyupMapTo$ = keyUp$.pipe(mapTo<string>('keyboard pressed'));

keyupCode$.subscribe((code) => console.log('map', code));
keyupPluck$.subscribe((code) => console.log('pluck', code));
keyupMapTo$.subscribe((code) => console.log('pluck', code));
