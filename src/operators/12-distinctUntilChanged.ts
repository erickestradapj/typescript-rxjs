import { distinct, of, from, distinctUntilChanged } from 'rxjs';

// of(1, '1', 1, 3, 3, 2, 2, 4, 4, 5, 3, '1')
//    .pipe(
//       distinctUntilChanged() // ===
//    )
//    .subscribe(console.log);

interface Character {
   name: string;
}

const characters: Character[] = [
   {
      name: 'Megaman',
   },
   {
      name: 'Megaman',
   },
   {
      name: 'Zero',
   },
   {
      name: 'Dr. Willy',
   },
   {
      name: 'X',
   },
   {
      name: 'X',
   },
   {
      name: 'Zero',
   },
];

from(characters)
   .pipe(distinctUntilChanged((o1, o2) => o1.name === o2.name))
   .subscribe(console.log);
