// import { createEntityAdapter, EntityState } from '@ngrx/entity';
// import { Message } from 'src/models';

// export interface PostsState extends EntityState<Message> {
//   count: number;
// }

// export const postsAdapter = createEntityAdapter<Message>({
//   sortComparer: sortByName,
// });

// export const initialState: PostsState = postsAdapter.getInitialState({
//   count: 0,
// });

// export function sortByName(a: Message, b: Message): number {
//   const compare = a.name.localeCompare(b.name);
//   if (compare > 0) {
//     return -1;
//   }

//   if (compare < 0) {
//     return 1;
//   }

//   return compare;
// }
