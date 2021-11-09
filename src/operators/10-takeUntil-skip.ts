import { interval, takeUntil, fromEvent, skip, tap } from 'rxjs';
const button = document.createElement('button');
button.innerHTML = 'Timer Stop';

document.querySelector('body').append(button);

interval(1000)
   .pipe(
      takeUntil(
         fromEvent(button, 'click').pipe(
            tap(() => console.log('take before of skip')),
            skip(1),
            tap(() => console.log('take after of skip'))
         )
      )
   )
   .subscribe({
      next: (val) => console.log('next', val),
      complete: () => console.log('complete'),
   });
