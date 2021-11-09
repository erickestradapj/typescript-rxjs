import { from, reduce, scan, map } from 'rxjs';
const numbers = [1, 2, 3, 4, 5];

//TODO: Reduce
from(numbers)
   .pipe(reduce((acc, curr) => acc + curr, 0))
   .subscribe(console.log);

console.log('====================');

//TODO: Scan
from(numbers)
   .pipe(scan((acc, curr) => acc + curr, 0))
   .subscribe(console.log);

//TODO: Redux
interface User {
   id?: string;
   auth?: boolean;
   token?: string;
   age?: number;
}

const user: User[] = [
   { id: 'Erick', auth: false, token: null },
   { id: 'Erick', auth: true, token: 'ABC' },
   { id: 'Erick', auth: true, token: 'ABC123' },
];

from(user)
   .pipe<User>(
      scan(
         (acc, curr) => {
            return { ...acc, ...curr };
         },
         { age: 33 }
      )
   )
   .pipe(map((state) => state.id))
   .subscribe(console.log);
