import { ajax } from 'rxjs/ajax';
import { fromEvent, debounceTime, map, pluck, mergeAll, pipe, Observable, mergeMap, switchMap } from 'rxjs';
import { GithubUsers, Item } from '../interfaces/github-users';

const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);

// Helpers
const showUsers = (users: Item[]) => {
   orderList.innerHTML = '';
   console.log(users);

   for (const user of users) {
      const li = document.createElement('li');
      const img = document.createElement('img');
      img.src = user.avatar_url;

      const anchor = document.createElement('a');
      anchor.href = user.html_url;
      anchor.text = 'See page';
      anchor.target = '_blank';

      li.append(img);
      li.append(user.login + ' ');
      li.append(anchor);

      orderList.append(li);
   }
};

//Streams
// fromEvent<KeyboardEvent>(textInput, 'keyup')
//    .pipe(
//       debounceTime<KeyboardEvent>(500),
//       map<KeyboardEvent, string>((e) => e.target['value']),
//       map<string, Observable<GithubUsers>>((text) =>
//          ajax.getJSON(`https://api.github.com/search/users?q=${text}`)
//       ),
//       mergeAll<Observable<GithubUsers>>(),
//       map<GithubUsers, Item[]>((m) => m.items)
//    )
//    .subscribe(showUsers);

const url = 'https://httpbin.org/delay/1?arg=';

fromEvent<KeyboardEvent>(textInput, 'keyup')
   .pipe(
      pluck('target', 'value'),
      switchMap((text) => ajax.getJSON(url + text))
   )
   .subscribe(console.log);
