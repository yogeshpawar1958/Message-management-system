import { createFeatureSelector, createSelector } from '@ngrx/store';
import { messageFeatureKey, MessageState } from '../reducer/message.reducer';

export const selectMessageState = createFeatureSelector<MessageState>(messageFeatureKey);
 export const selectMessages = createSelector(
    selectMessageState,
      (state:MessageState ) => state.messages
    );
