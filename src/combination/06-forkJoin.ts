import { forkJoin, of, interval, take, delay } from 'rxjs';

forkJoin([of(1, 2, 3, 4), interval(1000).pipe(take(3)), of('a', 'b', 'c').pipe(delay(3500))]).subscribe(
   (resp) => console.log(resp)
);
