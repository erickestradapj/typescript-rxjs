import { mergeMap, of, interval, map, take, fromEvent, takeUntil } from 'rxjs';

of('a', 'b', 'c').pipe(
   mergeMap((letter) =>
      interval(1000).pipe(
         map((i) => letter + i),
         take(3)
      )
   )
);
// .subscribe({
//    next: (val) => console.log('next', val),
//    complete: () => console.log('complete'),
// });

// const mousedown$ = fromEvent(document, 'mousedown');
// const mouseup$ = fromEvent(document, 'mouseup');
// const interval$ = interval();

fromEvent(document, 'mousedown')
   .pipe(mergeMap(() => interval().pipe(takeUntil(fromEvent(document, 'mouseup')))))
   .subscribe(console.log);
