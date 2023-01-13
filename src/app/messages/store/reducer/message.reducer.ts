
import { Action, createReducer, on } from '@ngrx/store';
import { Message } from 'src/models';
import { addMessages, loadMessageSuccess } from '../action/message.actions';

export const messageFeatureKey = 'messages';

export interface MessageState {
  messages:Message[];
}

export const initialState: MessageState = {
  messages:[]
};

export const messageReducer = createReducer(
  initialState,
   on(addMessages,(state:MessageState , {message}) =>
      ({...state,messages: [...state.messages, message]})),

      on(loadMessageSuccess,(state , action)=>{
        return {
                ...state,
                messages:action.messages
      }
    }
      )
);

export function reducer(state: MessageState | any, action: Action): any {
    return messageReducer(state, action);
  }
