import { fromEvent, pipe, map, takeWhile } from 'rxjs';

fromEvent<PointerEvent>(document, 'click')
   .pipe(
      map(({ x, y }) => ({ x, y })),
      takeWhile(({ y }) => y <= 150, true)
   )
   .subscribe({
      next: (val) => console.log('next', val),
      complete: () => console.log('complete'),
   });
