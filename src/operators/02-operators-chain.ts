import { filter, range, from, fromEvent, map } from 'rxjs';
// range(1, 10)
//    .pipe(filter((val) => val % 2 == 1))
//    .subscribe(console.log);

// range(20, 30)
//    .pipe(
//       filter((val, i) => {
//          console.log('index', i);
//          return val % 2 == 1;
//       })
//    )
//    .subscribe(console.log);

interface Character {
   type: string;
   name: string;
}

const characters: Character[] = [
   {
      type: 'hero',
      name: 'Batman',
   },
   {
      type: 'hero',
      name: 'Robin',
   },
   {
      type: 'villain',
      name: 'Joker',
   },
];

// from(characters)
//    .pipe(filter((val) => val.type === 'hero'))
//    .subscribe(console.log);

// from(characters)
//    .pipe(filter((val) => val.type === 'villain'))
//    .subscribe(console.log);

fromEvent<KeyboardEvent>(document, 'keyup')
   .pipe(
      map((e) => e.key), // <KeyboardEvent, string>
      filter((k) => k === 'Enter')
   )
   .subscribe(console.log);
