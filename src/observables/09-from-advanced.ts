import { of, from } from 'rxjs';

/**
 * of = take arguments and generate a sequence
 * from = array, promise, iterable, observable
 */

const observer = {
   next: (val) => console.log('next', val),
   complete: () => console.log('===> complete'),
};

const myGenerator = function* () {
   yield 1;
   yield 2;
   yield 3;
   yield 4;
   yield 5;
};

const myIterable = myGenerator();
// for (const id of myIterable) {
//    console.log(id);
// }
from(myIterable).subscribe(observer);

// const source$ = from([1, 2, 3, 4]);
// const source$ = of(...[1, 2, 3, 4]);
// const source$ = from('Erick');

const source$ = from(fetch('https://api.github.com/users/klerith'));

// source$.subscribe(async (resp) => {
//    console.log(resp);
//    //    resp.json().then((resp) => {
//    //       console.log(resp);
//    //    });

//    const dataResp = await resp.json();
//    console.log(dataResp);
// });

// source$.subscribe(observer);
