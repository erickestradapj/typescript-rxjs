import {
   debounceTime,
   fromEvent,
   map,
   tap,
   pluck,
   distinctUntilChanged,
   throttleTime,
   asyncScheduler,
} from 'rxjs';

//TODO: Example 1
// fromEvent(document, 'click').pipe(throttleTime(3000)).subscribe(console.log);

//TODO: Example 2
const input = document.createElement('input');
document.querySelector('body').append(input);

fromEvent<KeyboardEvent>(input, 'keyup')
   .pipe(
      throttleTime(400, asyncScheduler, {
         leading: false,
         trailing: true,
      }),
      pluck('target', 'value'),
      distinctUntilChanged()
   )
   .subscribe(console.log);
