import { first, fromEvent, take, tap, map } from 'rxjs';

fromEvent<PointerEvent>(document, 'click')
   .pipe(
      tap<PointerEvent>(() => console.log('tap')),
      // map((event) => ({
      //    clientX: event.clientX,
      //    clientY: event.clientY,
      // }))
      map(({ clientX, clientY }) => ({
         clientX,
         clientY,
      })),
      first((event) => event.clientY >= 150)
   )
   .subscribe({
      next: (val) => console.log('next', val),
      complete: () => console.log('complete'),
   });
