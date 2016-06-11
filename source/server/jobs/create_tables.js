import { r, r_internal } from '../db';

const todos = [
  'Bring out the trash.'
];

const createTodo = () => {
  r.table('todo').get('todo').run()
  .then(function(result) {
    r.table(result.table).insert({ text: todos, $hz_v$: 1 }).run();
  });
};

createTodo();
