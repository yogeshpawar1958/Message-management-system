
import { createAction, props } from '@ngrx/store';
import { Message } from 'src/models';


export const addNewMessage=createAction('[add Message] add new Action',props<{message:Message}>())
