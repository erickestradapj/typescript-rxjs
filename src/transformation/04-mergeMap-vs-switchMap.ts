import { fromEvent, mergeMap, interval, switchMap } from 'rxjs';

fromEvent(document, 'click')
   .pipe(switchMap(() => interval(1000)))
   .subscribe(console.log);
