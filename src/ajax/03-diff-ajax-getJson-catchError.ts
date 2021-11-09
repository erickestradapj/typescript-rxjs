import { ajax, AjaxError } from 'rxjs/ajax';
import { of, catchError } from 'rxjs';

const url = 'https://httpbin.org/delay/1asdasd';
// const url = 'https://api.github.com/users?per_page=5';

const handleError = (resp: AjaxError) => {
   console.warn('error', resp.message);
   return of({
      ok: false,
      users: [],
   });
};

// ajax
//    .getJSON(url)
//    .pipe(catchError(handleError))
//    .subscribe((data) => console.log('getJSON:', data));

// ajax(url)
//    .pipe(catchError(handleError))
//    .subscribe((data) => console.log('data:', data));

ajax.getJSON(url).subscribe((data) => console.log('getJSON:', data));

// ajax(url).subscribe((data) => console.log('data:', data));

ajax
   .getJSON(url)
   .pipe(catchError(handleError))
   .subscribe({
      next: (val) => console.log('next', val),
      error: (err) => console.log('error en subs:', err),
      complete: () => console.log('complete'),
   });
