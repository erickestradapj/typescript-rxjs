import { concat, interval, take } from 'rxjs';

concat(interval(1000).pipe(take(3)), interval(1000).pipe(take(3)), [1, 2, 3, 4]).subscribe(console.log);
