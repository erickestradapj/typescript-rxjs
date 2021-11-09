import { interval, take, reduce, tap } from 'rxjs';
const numbers = [1, 2, 3, 4, 5];

//TODO: JavaScript

const totalReducer = (acc: number, curr: number) => acc + curr;

const total = numbers.reduce(totalReducer, 0);
// console.log('JS - total arr', total);

//TODO: RxJS

interval(1000)
   .pipe(
      take(3),
      tap(console.log),
      reduce((acc, curr) => acc + curr, 5) // "5" + (0 + 1 + 2) = 8
   )
   .subscribe({
      next: (val) => console.log('next', val),
      complete: () => console.log('Completed'),
   });
