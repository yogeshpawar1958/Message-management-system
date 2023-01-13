
import { createReducer, on } from '@ngrx/store';
import { Message } from 'src/models';
import { addNewMessage } from '../Action/addMessage.action';




export const initialState:Message[]=[]
export const messageReducer=createReducer(initialState,on(addNewMessage,(state,data)=>{
  return [...state, data ] ;
}))
