import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError, pluck, of } from 'rxjs';

const url = 'https://api.github.com/users?per_page=5';

// const fetchPromise = fetch(url);

// const handleErrors = (response: Response) => {
//    if (!response.ok) {
//       throw new Error(response.statusText);
//    }

//    return response;
// };

// fetchPromise
//    .then((resp) => resp.json())
//    .then((data) => console.log('data:', data))
//    .catch((err) => console.warn(err));

// fetchPromise
//    .then(handleErrors)
//    .then((resp) => resp.json())
//    .then((data) => console.log('data:', data))
//    .catch((err) => console.warn(err));

const handleError = (err: AjaxError) => {
   console.warn('error in:', err.message);
   return of([]);
};

ajax(url).pipe(pluck('response'), catchError(handleError)).subscribe(console.log);
