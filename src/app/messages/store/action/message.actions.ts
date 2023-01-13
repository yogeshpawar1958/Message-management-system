import { createAction, props } from '@ngrx/store';
import { Message } from 'src/models';

export const addMessages = createAction(
  '[Message] AddMessage Messages',
  (message: Message) => ({ message })
);

export const addMessageSuccess = createAction(
  '[Message] AddMessage Messages Success',
  props<{ message: Message }>()
);

export const addMessagesFailure = createAction(
  '[Message] AddMessage Messages Failure',
  props<{ error: any }>()
);

export const loadMessages = createAction('[message page] load messages');

export const loadMessageSuccess = createAction(
  '[Message] AddMessage Messages Success',
  props<{ messages: Message[] }>()
);

export const loadMessageError = createAction(
  '[Message] AddMessage Messages Error',
  props<{ messages: Message[] }>()
);
