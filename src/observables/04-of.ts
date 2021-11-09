import { of } from 'rxjs';

// const obs$ = of(1, 2, 3, 4, 5, 6);
const obs$ = of(...[1, 2, 3, 4, 5, 6], 2, 3, 4, 5);

console.log('Start Obs$');
obs$.subscribe({
   next: (value) => {
      console.log('next', value);
   },
   error: () => {
      null;
   },
   complete: () => console.log('== END =='),
});
console.log('End Obs$');
