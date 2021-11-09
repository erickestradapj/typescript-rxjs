import { debounceTime, fromEvent, map, tap, pluck, distinctUntilChanged } from 'rxjs';

//TODO: Example 1
// fromEvent(document, 'click').pipe(debounceTime(3000)).subscribe(console.log);

//TODO: Example 2
const input = document.createElement('input');
document.querySelector('body').append(input);

fromEvent<KeyboardEvent>(input, 'keyup')
   .pipe(debounceTime(1000), pluck('target', 'value'), distinctUntilChanged())
   .subscribe(console.log);
