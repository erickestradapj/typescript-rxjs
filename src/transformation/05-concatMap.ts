import { fromEvent, interval, take, concatMap } from 'rxjs';

fromEvent(document, 'click')
   .pipe(concatMap(() => interval(500).pipe(take(3))))
   .subscribe(console.log);
