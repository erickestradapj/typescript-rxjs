import { fromEvent, merge, pluck } from 'rxjs';

merge(
   fromEvent(document, 'keyup').pipe(pluck('type')),
   fromEvent(document, 'click').pipe(pluck('type'))
).subscribe(console.log);
