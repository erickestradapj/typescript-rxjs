import { fromEvent, interval, take, concatMap, exhaustMap } from 'rxjs';

fromEvent(document, 'click')
   .pipe(exhaustMap(() => interval(500).pipe(take(3))))
   .subscribe(console.log);
