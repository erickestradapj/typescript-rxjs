import { Observable, Observer, Subject, Subscription } from 'rxjs';

const observer: Observer<any> = {
   next: (value) => console.log('next:', value),
   error: (error) => console.warn('error:', error),
   complete: () => console.info('completed'),
};

const interval$ = new Observable<number>((subscriber) => {
   const intervalID = setInterval(() => {
      subscriber.next(Math.random());
   }, 1000);

   return () => {
      clearInterval(intervalID);
      console.log('Interval destroyed');
   };
});

/**
 * 1- Multiple casting
 * 2- Also an observer
 * 3- Next, error and complete
 */

const subject$ = new Subject();
const subscription = interval$.subscribe(subject$);

// const subscription1: Subscription = interval$.subscribe((rnd) => console.log('subscription_1', rnd));
// const subscription2: Subscription = interval$.subscribe((rnd) => console.log('subscription_2', rnd));

const subscription1: Subscription = subject$.subscribe(observer);
const subscription2: Subscription = subject$.subscribe(observer);

setTimeout(() => {
   subject$.next(10);

   subject$.complete();

   subscription.unsubscribe();
}, 3500);
