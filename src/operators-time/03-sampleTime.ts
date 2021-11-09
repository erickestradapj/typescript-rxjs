import { fromEvent, map, sampleTime } from 'rxjs';

fromEvent<PointerEvent>(document, 'click')
   //    .pipe(map(({ x, y }) => ({ x: x, y: y })))
   .pipe(
      map(({ x, y }) => ({ x, y })),
      sampleTime(2000)
   )
   .subscribe(console.log);
