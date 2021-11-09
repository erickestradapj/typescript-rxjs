import { distinct, of, from } from 'rxjs';

// of(1, '1', 1, 3, 3, 2, 2, 4, 4, 5, 3, '1')
//    .pipe(
//       distinct() // ===
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
      name: 'X',
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
      name: 'Megaman',
   },
   {
      name: 'Zero',
   },
];

from(characters)
   .pipe(distinct((o) => o.name))
   .subscribe(console.log);
