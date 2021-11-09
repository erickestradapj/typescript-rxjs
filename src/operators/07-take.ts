import { take, of, tap } from 'rxjs';

of(1, 2, 3, 4, 5)
   .pipe(
      tap((t) => console.log('tap:', t)),
      take(2)
   )
   .subscribe({
      next: (val) => console.log('next ==>', val),
      complete: () => console.log('complete'),
   });
