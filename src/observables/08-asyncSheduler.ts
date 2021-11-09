import { asyncScheduler } from 'rxjs';

// setTimeout(() => {}, 3000);
// setInterval(() => {}, 3000);

// const greet1 = () => console.log('Hello world');
// const greet2 = (name) => console.log(`Hello ${name}`);
// const greet3 = ({ firstName, lastName }) => console.log(`Hello ${firstName} ${lastName}`);

// asyncScheduler.schedule(greet1 );
// asyncScheduler.schedule(greet2, 2000);
// asyncScheduler.schedule(greet3, 2000, { firstName: 'Erick', lastName: 'Estrada' });

const subs = asyncScheduler.schedule(
   function (state) {
      console.log('state', state);
      this.schedule(state + 1, 1000);
   },
   3000,
   20
);

// setTimeout(() => {
//    subs.unsubscribe();
// }, 6000);

asyncScheduler.schedule(() => subs.unsubscribe(), 6000);
