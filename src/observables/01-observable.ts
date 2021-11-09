import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
   next: (value) => console.log('next [obs]:', value),
   error: (error) => console.warn('error [obs]:', error),
   complete: () => console.info('completed [obs]'),
};

// const obs$ = Observable.create();
const obs$ = new Observable<string>((subs) => {
   subs.next('Hello_1');
   subs.next('World_1');

   subs.next('Hello_2');
   subs.next('World_2');

   // Force a bug
   // const a = undefined;
   // a.name = 'Erick';

   subs.complete();

   subs.next('Not');
   subs.next('Never');
});

obs$.subscribe(observer);

// obs$.subscribe(
//    (value) => console.log('next: ', value),
//    (error) => console.warn('error', error),
//    () => console.info('Completed')
// );
