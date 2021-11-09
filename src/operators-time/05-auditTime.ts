import { auditTime, fromEvent, tap, map } from 'rxjs';

fromEvent<PointerEvent>(document, 'click')
   .pipe(
      map(({ x }) => x),
      tap((val) => console.log('tap', val)),
      auditTime(2000)
   )
   .subscribe(console.log);
