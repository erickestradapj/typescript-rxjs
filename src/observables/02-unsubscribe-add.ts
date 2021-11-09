import { Observable, Observer, Subscription } from 'rxjs';

const observer: Observer<any> = {
   next: (value) => console.log('next:', value),
   error: (error) => console.warn('error:', error),
   complete: () => console.info('completed'),
};

const interval$ = new Observable<number>((subscriber) => {
   let count = 0;

   const interval = setInterval(() => {
      count++;
      subscriber.next(count);
      console.log(count);
   }, 1000);

   setTimeout(() => {
      subscriber.complete();
   }, 2500);

   return () => {
      clearInterval(interval);
      console.log('Interval destroyed');
   };
});

const subscription1: Subscription = interval$.subscribe(observer);
const subscription2: Subscription = interval$.subscribe(observer);
const subscription3: Subscription = interval$.subscribe(observer);

subscription1.add(subscription2);
subscription1.add(subscription3);

setTimeout(() => {
   subscription1.unsubscribe();
   // subscription2.unsubscribe();
   // subscription3.unsubscribe();

   console.log('Completed timeout');
}, 3000);
