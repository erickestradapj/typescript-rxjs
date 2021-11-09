import { range, tap, map } from 'rxjs';

range(1, 5)
   .pipe(
      tap((x) => console.log('before', x)),
      map((val) => val * 10),
      tap({
         next: (y) => console.log('after', y),
         complete: () => console.log('Completed!!'),
      })
   )
   .subscribe((val) => console.log('subscribe ==>', val));
